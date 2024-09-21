import { useState } from 'react'

import './App.css'

import { SignIn } from './screen/SignIn'
import { AuthContextProvider, useAuth } from './Context/authContext'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './protectedRoute'
import { Dashboard } from './screen/Dashboard'

function App() {

  return (
    <>
      
      
     <AuthContextProvider>
     <Router>
     <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            
            <Dashboard/>
          </ProtectedRoute>
        }/>
      </Routes>
     </Router>
     </AuthContextProvider>
    </>
  )
}

export default App
