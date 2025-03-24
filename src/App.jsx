import React from 'react'
import { useSelector } from 'react-redux'
import DashboardRouter from './routes/Dashboard'
import AuthRouter from './routes/Auth'

const App = () => {
  const user = useSelector(state =>
    state.auth.isAuthenticated
  )
  console.log(user)
  return (
    <div>
      {
        user ? <DashboardRouter/> : <AuthRouter/> 
      }
    </div>
  )
}

export default App
