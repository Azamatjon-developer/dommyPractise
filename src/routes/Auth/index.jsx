import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../../pages/auth/Login'

const AuthRouter = () => {
  return useRoutes([{
    path:"/",
    element:<Login/>
  }])
}

export default AuthRouter
