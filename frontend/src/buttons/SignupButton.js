import React from 'react'
import Button from '@material-ui/core/Button'


export const SignupButton = React.forwardRef((props, ref) => {

  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      ref={ref}
      {...props}
    >
      Create player
    </Button>
  )
})
