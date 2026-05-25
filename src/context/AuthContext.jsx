import React, { createContext, useState, useContext, useEffect } from 'react'
import { auth, db } from '../firebase/config'
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth'
import { ref, get } from 'firebase/database'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Try to get user data from Realtime Database
        try {
          const usersRef = ref(db, 'users')
          const usersSnapshot = await get(usersRef)
          
          if (usersSnapshot.exists()) {
            const users = usersSnapshot.val()
            const userEntry = Object.entries(users).find(
              ([_, userData]) => userData.email?.toLowerCase() === firebaseUser.email.toLowerCase()
            )
            
            if (userEntry) {
              const [userId, userData] = userEntry
              setUser({
                uid: userId,
                email: userData.email,
                name: userData.name,
                username: userData.username,
                employeeId: userData.employeeId,
                isAdmin: userData.isAdmin || false
              })
            } else {
              // Fallback for Firebase Auth users NOT in database
              console.warn('User exists in Firebase Auth but not in Realtime Database:', firebaseUser.email)
              setUser({
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
                employeeId: firebaseUser.email.split('@')[0].toUpperCase(),
                isAdmin: false // Default to non-admin for safety
              })
            }
          } else {
            // No users in database, use Firebase Auth data
            console.warn('No users collection in Realtime Database')
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
              employeeId: firebaseUser.email.split('@')[0].toUpperCase(),
              isAdmin: false // Default to non-admin for safety
            })
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
          // Fallback to Firebase Auth data
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
            employeeId: firebaseUser.email.split('@')[0].toUpperCase(),
            isAdmin: false // Default to non-admin for safety
          })
        }
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // New method for username/custom login
  const loginWithCredentials = async (identifier, password, userId = null, userData = null) => {
    if (userData && userData.email) {
      // Username login - authenticate with Firebase using the email from database
      console.log('Authenticating with Firebase using email:', userData.email)
      const result = await signInWithEmailAndPassword(auth, userData.email, password)
      console.log('Firebase authentication successful')
      // User state will be set by onAuthStateChanged listener
      return result
    } else {
      // Email-based Firebase Auth login
      return signInWithEmailAndPassword(auth, identifier, password)
    }
  }

  const logout = () => {
    return signOut(auth)
  }

  const value = {
    user,
    login,
    loginWithCredentials,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
