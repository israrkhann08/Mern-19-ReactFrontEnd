import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRouter = (props) => {
      const isLoggedIn = false;
      const navigate = useNavigate;

  return (
    <> {isLoggedIn ? props.children : <Navigate to={"/user-auth/login"}  />  }  </>
  )
}

export default PrivateRouter