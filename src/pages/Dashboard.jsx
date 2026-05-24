import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useData } from '../context/DataContext'
import { format } from 'date-fns'
import './Dashboard.css'

function Dashboard() {
  const { user } = useAuth()
  const { userAttendance, loading: globalLoading, dataLoaded, refreshData } = useData()
  const [stats, setStats] = useState({
    present: 0,
    absent: 0,
    halfDay: 0,
    total: 0
  })

  // Calculate stats from global data
  useEffect(() => {
    if (userAttendance.length > 0) {
      let present = 0, absent = 0, halfDay = 0
      
      userAttendance.forEach((record) => {
        if (record.status === 'Present') present++
        else if (record.status === 'Absent') absent++
        else if (record.status === 'Half Day') halfDay++
      })
      
      setStats({
        present,
        absent,
        halfDay,
        total: userAttendance.length
      })
    }
  }, [userAttendance])

  const getStatusBadge = (status) => {
    const badges = {
      'Present': 'badge-success',
      'Absent': 'badge-danger',
      'Half Day': 'badge-warning',
      'Leave': 'badge-info'
    }
    return badges[status] || 'badge-secondary'
  }

  if (globalLoading && !dataLoaded) {
    return (
      <div className="dashboard-page">
        <div className="container">
          <div className="dashboard-header">
            <h1>Welcome, {user.name}!</h1>
            <p>Employee ID: {user.employeeId}</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card stat-total">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <h3>...</h3>
                <p>Total Days</p>
              </div>
            </div>
            
            <div className="stat-card stat-present">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <h3>...</h3>
                <p>Present</p>
              </div>
            </div>
            
            <div className="stat-card stat-halfday">
              <div className="stat-icon">⏰</div>
              <div className="stat-content">
                <h3>...</h3>
                <p>Half Day</p>
              </div>
            </div>
            
            <div className="stat-card stat-absent">
              <div className="stat-icon">❌</div>
              <div className="stat-content">
                <h3>...</h3>
                <p>Absent</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>Attendance History</h2>
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <p>Loading your attendance records...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, {user.name}!</h1>
          <p>Employee ID: {user.employeeId}</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card stat-total">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{stats.total}</h3>
              <p>Total Days</p>
            </div>
          </div>
          
          <div className="stat-card stat-present">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{stats.present}</h3>
              <p>Present</p>
            </div>
          </div>
          
          <div className="stat-card stat-halfday">
            <div className="stat-icon">⏰</div>
            <div className="stat-content">
              <h3>{stats.halfDay}</h3>
              <p>Half Day</p>
            </div>
          </div>
          
          <div className="stat-card stat-absent">
            <div className="stat-icon">❌</div>
            <div className="stat-content">
              <h3>{stats.absent}</h3>
              <p>Absent</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Your Attendance History</h2>
            <button 
              onClick={refreshData}
              className="btn btn-secondary"
              disabled={globalLoading}
            >
              {globalLoading ? 'Refreshing...' : '🔄 Refresh'}
            </button>
          </div>
          
          {userAttendance.length === 0 ? (
            <div className="empty-state">
              <p>No attendance records found</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Month</th>
                    <th>Status</th>
                    <th>Remarks</th>
                    <th>Submitted On</th>
                  </tr>
                </thead>
                <tbody>
                  {userAttendance.map((record) => (
                    <tr key={record.id}>
                      <td>{format(new Date(record.date), 'dd MMM yyyy')}</td>
                      <td>{format(new Date(record.date), 'MMMM yyyy')}</td>
                      <td>
                        <span className={`badge ${getStatusBadge(record.status)}`}>
                          {record.status}
                        </span>
                      </td>
                      <td>{record.remarks || '-'}</td>
                      <td>{format(new Date(record.submittedAt), 'dd MMM yyyy HH:mm')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
