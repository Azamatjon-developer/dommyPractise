import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../../pages/auth/Login'
import Products from '../../pages/dashboard/products/Products'
import Users from '../../pages/dashboard/users/Users'
import Posts from '../../pages/dashboard/posts/Posts'
import Todos from '../../pages/dashboard/todos/Todos'

const AuthRouter = () => {
  return useRoutes([
    {
    path:"/",
    element:<Login/>
    },
    {
      path:'/products',
      element:<Products/>
    },
    {
      path:'/users',
      element:<Users/>
    },
    {
      path:'/posts',
      element:<Posts/>
    },
    {
      path:'/todos',
      element:<Todos/>
    }
])
}

export default AuthRouter
