import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AttendanceForm from './pages/AttendanceForm'
import AdminPanel from './pages/AdminPanel'
import { AuthProvider, useAuth } from './context/AuthContext'
import { DataProvider } from './context/DataContext'
import './App.css'

function PrivateRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuth()
  
  if (loading) {
    return <div className="loading">Loading...</div>
  }
  
  if (!user) {
    return <Navigate to="/login" />
  }
  
  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/dashboard" />
  }
  
  return children
}

function AppContent() {
  const { user, loading } = useAuth()
  
  if (loading) {
    return <div className="loading">Loading...</div>
  }
  
  return (
    <div className="App">
      {user && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/attendance" 
          element={
            <PrivateRoute>
              <AttendanceForm />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute adminOnly={true}>
              <AdminPanel />
            </PrivateRoute>
          } 
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router basename="/attendance-portal">
          <AppContent />
        </Router>
      </DataProvider>
    </AuthProvider>
  )
}

export default App
