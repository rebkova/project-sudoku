import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';


const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-sudoku"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
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

userSchema.pre('save', async function (next) {

  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = bcrypt.genSaltSync();

  user.password = bcrypt.hashSync(user.password, salt);

  next();
});


const User = mongoose.model('User', userSchema);

const LeaderBoard = mongoose.model('LeaderBoard', {
  username: { type: String },
  time: { type: Number },

  createdAt: {
    type: Date,
    default: Date.now
  }
})


if (process.env.RESET_DATABASE) {
  const clearDatabase = async () => {
    await User.deleteMany({}, () => {
      console.log(`User db removed`)
    })

    await LeaderBoard.deleteMany({}, () => {
      console.log(`LeaderBoard db removed`)
    })
  }

  clearDatabase()
}


const port = process.env.PORT || 8080;
const app = express();
import listEndpoints from 'express-list-endpoints';


const authenticateUser = async (request, response, next) => {

  const user = await User.findOne({ accessToken: request.header('Authorization') });

  if (user) {
    request.user = user;
    next();
  } else {
    response.status(401).json({ message: 'Sorry, authentication failed' });
  }
};


app.use(cors());
app.use(bodyParser.json());


app.use((request, response, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    response.status(503).json({ error: 'Service unavailable' });
  }
});

app.get('/', (request, response) => {

  if (response) {
    response.status(200).send(listEndpoints(app));
  } else {
    response.status(404).send('No endpoints found.');
  }
});


//SIGN UP ENDPOINT
app.post('/users', async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const user = await new User({
      username,
      email,
      password,
    }).save();

    response.status(200).json({ userID: user._id });
  }
  catch (err) {
    response.status(400).json({ message: 'Sorry, could not create user', errors: err });
  }
})


//LOGIN ENDPOINT
app.post('/sessions', async (request, response) => {
  try {

    const { username, password } = request.body;
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      response
        .status(200)
        .json({ userId: user._id, accessToken: user.accessToken });
    } else {
      throw 'Incorrect username or password';
    }
  } catch (err) {
    response.status(404).json({ error: 'Sorry, user does not exist' });
  }
});


app.get('/sessions/:id/profile', authenticateUser);
app.get('/sessions/:id/profile', (request, response) => {

  const userMessage = `Welcome, ${request.user.username}, you're now logged in!`

  response.status(201).json(userMessage)
});

app.get('/leaderboard', async (request, response) => {

  try {
    const leaderboard = await LeaderBoard.find()
      .sort({ time: "asc" })
      .limit(10)
      .exec()
    response.status(200).json(leaderboard)
  } catch (err) {
    response.status(400).json({ message: "Could not get the leaderboard data.", errors: err.errors })
  }
});

app.post('/leaderboard', async (request, response) => {

  try {
    const username = request.body.username

    const time = request.body.time

    const leaderBoard = new LeaderBoard({ username, time })

    const savedLeaderBoard = await leaderBoard.save()

    response.status(201).json(savedLeaderBoard)

  } catch (err) {
    response.status(400).json({ message: "Bad request. Couldn't save leaderBoard to the database.", errors: err.errors })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});