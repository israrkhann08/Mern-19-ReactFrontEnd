import React from 'react'

const PrivateRouter = (props) => {
      const isLoggedIn = false;
  return <> {isLoggedIn ? props.children : <h1>Not Logged In You Dont Accessed please login first</h1> }  </>
}

export default PrivateRouter