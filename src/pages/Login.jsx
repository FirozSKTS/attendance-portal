import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase/config'
import { ref, get } from 'firebase/database'
import logo from '../../logo\'s/skts-latest.png'
import './Login.css'

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { loginWithCredentials } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setError('')
      setLoading(true)

      console.log('Login attempt with:', usernameOrEmail)

      // Check if input is username or email
      const isEmail = usernameOrEmail.includes('@')
      
      if (isEmail) {
        console.log('Attempting email login...')
        // Direct email login
        await loginWithCredentials(usernameOrEmail, password)
      } else {
        console.log('Attempting username login...')
        // Username login - find user by username
        const usersRef = ref(db, 'users')
        console.log('Fetching users from database...')
        const usersSnapshot = await get(usersRef)
        
        console.log('Users snapshot exists:', usersSnapshot.exists())
        
        if (!usersSnapshot.exists()) {
          console.error('No users found in database')
          throw new Error('No users found')
        }

        const users = usersSnapshot.val()
        console.log('Total users in database:', Object.keys(users).length)
        console.log('Users data:', users)
        
        const userEntry = Object.entries(users).find(
          ([_, userData]) => {
            console.log('Checking user:', userData.username, 'against:', usernameOrEmail.toLowerCase())
            return userData.username?.toLowerCase() === usernameOrEmail.toLowerCase()
          }
        )

        console.log('User entry found:', userEntry ? 'Yes' : 'No')

        if (!userEntry) {
          console.error('User not found with username:', usernameOrEmail)
          throw new Error('User not found')
        }

        const [userId, userData] = userEntry
        console.log('Found user:', userData.name, 'with ID:', userId)
        
        // Verify password
        console.log('Verifying password...')
        if (userData.password !== password) {
          console.error('Password mismatch')
          throw new Error('Invalid password')
        }

        console.log('Password verified, logging in...')
        // Login with user data
        await loginWithCredentials(userData.email || userData.username, password, userId, userData)
      }

      console.log('Login successful, navigating to dashboard...')
      navigate('/dashboard')
    } catch (err) {
      console.error('Login error:', err)
      console.error('Error details:', err.message, err.code)
      setError('Failed to login. Please check your username/email and password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="login-logo" />
          </div>
          
          <h1 className="portal-title">Attendance Management Portal</h1>
          <h2 className="login-title">Login</h2>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Username or Email"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="login-footer">
            <p className="footer-text">Smart Krow Technology Solutions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
