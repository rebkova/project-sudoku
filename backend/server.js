import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import validator from 'validator';
const { isEmail } = 'validator';

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-sudoku"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

//define a schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // validate: [isEmail, 'invalid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: [5, 'The password is too short. Must be min 5 characters.'],
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
    unique: true,
  }
})

//pre mongoose-hook: allows hashing after we validate but before we save to DB
//hook is applied to the schema, not the model()
userSchema.pre('save', async function (next) {

  //the "this" variable has all the data from the userSchema and we can access it
  //"this" is a keyword reffering to "the object you're currently in"
  const user = this;

  //if the pw is not modified, we don't rehash it
  if (!user.isModified('password')) {
    return next();
  }

  //modified pw: Hash the password, after the validation of sign up details
  const salt = bcrypt.genSaltSync();

  //we're updating pw in the schema before it's saved
  user.password = bcrypt.hashSync(user.password, salt);

  next();
});

//create a model
const User = mongoose.model('User', userSchema);

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();
import listEndpoints from 'express-list-endpoints';

//Function that expects the user's accesstoken and validate access to restricted endpoints
const authenticateUser = async (request, response, next) => {

  const user = await User.findOne({ accessToken: request.header('Authorization') });

  if (user) {
    request.user = user;
    next();
  } else {
    response.status(401).json({ message: 'Sorry, authentication failed' });
  }
};

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

//middleware f() -> checks if we have a connection with the server (1 = connected)
app.use((request, response, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    response.status(503).json({ error: 'Service unavailable' });
  }
});

//Main API page
app.get('/', (request, response) => {

  if (response) {
    response.status(200).send(listEndpoints(app));
  } else {
    response.status(404).send('No endpoints found.');
  }
});

//SIGN UP ENDPOINT
//This endpoint registers the user & puts it in the database
app.post('/users', async (request, response) => {
  try {
    const { username, email, password } = request.body;

    //validation happens here + saving to the DB!
    const user = await new User({
      username,
      email,
      password,
    }).save();

    response.status(200).json({ userID: user._id }); //Sign up success & user is not able to be logged in right after that
  }
  catch (err) {
    response.status(400).json({ message: 'Sorry, could not create user', errors: err }); // Sign up error
  }
})


//LOGIN ENDPOINT
//This endpoint expects username and password from already existing users
app.post('/sessions', async (request, response) => {
  try {

    const { username, password } = request.body;
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      response
        .status(200)
        .json({ userId: user._id, accessToken: user.accessToken }); //Success
    } else {
      throw 'Incorrect username or password'; //If user that's signed up is trying to login but login details are incorrect
    }
  } catch (err) {
    response.status(404).json({ error: 'Sorry, user does not exist' }); //If a user that's not signed up is trying to login
  }
});

//Restricted endpoint, only accessible after user has logged in with valid username and access token
app.get('/sessions/:id/profile', authenticateUser);
app.get('/sessions/:id/profile', (request, response) => {

  const userMessage = `Welcome, ${request.user.username}, you're now logged in!`

  response.status(201).json(userMessage)
});

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world, this is my sudoku backend');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});