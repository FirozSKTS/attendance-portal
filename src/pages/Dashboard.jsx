import React, { useState, useEffect, useMemo } from 'react'
import { useAuth } from '../context/AuthContext'
import { useData } from '../context/DataContext'
import { format, startOfYear, getMonth, getYear } from 'date-fns'
import './Dashboard.css'

function Dashboard() {
  const { user } = useAuth()
  const { userAttendance, loading: globalLoading, dataLoaded, refreshData } = useData()
  
  // Filter states
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString())
  const [selectedStatus, setSelectedStatus] = useState('all')
  
  // Calculate leave balances
  const leaveBalances = useMemo(() => {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() // 0-11
    
    // CL: 1 per month, carry forward
    // SL: 1 per month, no carry forward
    const totalCLAllowed = currentMonth + 1 // Months passed in current year
    const totalSLAllowed = 1 // Only current month
    
    let clUsed = 0
    let slUsed = 0
    let halfDaysUsed = 0
    
    userAttendance.forEach(record => {
      const recordDate = new Date(record.date)
      const recordYear = recordDate.getFullYear()
      
      if (recordYear === currentYear) {
        if (record.status === 'Casual Leave') {
          clUsed += 1
        } else if (record.status === 'Sick Leave') {
          slUsed += 1
        } else if (record.status === 'Half Day') {
          halfDaysUsed += 1
          clUsed += 0.5 // Half day deducts 0.5 from CL
        }
      }
    })
    
    return {
      cl: {
        total: totalCLAllowed,
        used: clUsed,
        remaining: Math.max(0, totalCLAllowed - clUsed)
      },
      sl: {
        total: totalSLAllowed,
        used: slUsed,
        remaining: Math.max(0, totalSLAllowed - slUsed)
      },
      halfDays: halfDaysUsed
    }
  }, [userAttendance])
  
  // Filter attendance records
  const filteredAttendance = useMemo(() => {
    return userAttendance.filter(record => {
      const recordDate = new Date(record.date)
      const recordMonth = getMonth(recordDate)
      const recordYear = getYear(recordDate)
      
      // Month filter
      if (selectedMonth !== 'all' && recordMonth !== parseInt(selectedMonth)) {
        return false
      }
      
      // Year filter
      if (selectedYear !== 'all' && recordYear !== parseInt(selectedYear)) {
        return false
      }
      
      // Status filter
      if (selectedStatus !== 'all' && record.status !== selectedStatus) {
        return false
      }
      
      return true
    })
  }, [userAttendance, selectedMonth, selectedYear, selectedStatus])
  
  // Calculate stats from filtered data
  const stats = useMemo(() => {
    let present = 0, absent = 0, halfDay = 0, casualLeave = 0, sickLeave = 0
    
    filteredAttendance.forEach((record) => {
      if (record.status === 'Present') present++
      else if (record.status === 'Absent') absent++
      else if (record.status === 'Half Day') halfDay++
      else if (record.status === 'Casual Leave') casualLeave++
      else if (record.status === 'Sick Leave') sickLeave++
    })
    
    return {
      present,
      absent,
      halfDay,
      casualLeave,
      sickLeave,
      total: filteredAttendance.length
    }
  }, [filteredAttendance])
  
  // Get unique years from attendance data
  const availableYears = useMemo(() => {
    const years = new Set(userAttendance.map(record => getYear(new Date(record.date))))
    return Array.from(years).sort((a, b) => b - a)
  }, [userAttendance])
  
  const months = [
    { value: '0', label: 'January' },
    { value: '1', label: 'February' },
    { value: '2', label: 'March' },
    { value: '3', label: 'April' },
    { value: '4', label: 'May' },
    { value: '5', label: 'June' },
    { value: '6', label: 'July' },
    { value: '7', label: 'August' },
    { value: '8', label: 'September' },
    { value: '9', label: 'October' },
    { value: '10', label: 'November' },
    { value: '11', label: 'December' }
  ]

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

          {/* Leave Balance Cards */}
          <div className="leave-balance-section">
            <div className="leave-card cl-card">
              <div className="leave-header">
                <span className="leave-icon">🏖️</span>
                <span className="leave-title">Casual Leave (CL)</span>
              </div>
              <div className="leave-stats">
                <div className="leave-stat">
                  <span className="leave-number">...</span>
                  <span className="leave-label">Available</span>
                </div>
                <div className="leave-stat">
                  <span className="leave-number">...</span>
                  <span className="leave-label">Used</span>
                </div>
              </div>
              <div className="leave-note">✓ Carry Forward</div>
            </div>

            <div className="leave-card sl-card">
              <div className="leave-header">
                <span className="leave-icon">🤒</span>
                <span className="leave-title">Sick Leave (SL)</span>
              </div>
              <div className="leave-stats">
                <div className="leave-stat">
                  <span className="leave-number">...</span>
                  <span className="leave-label">Available</span>
                </div>
                <div className="leave-stat">
                  <span className="leave-number">...</span>
                  <span className="leave-label">Used</span>
                </div>
              </div>
              <div className="leave-note">✗ No Carry Forward</div>
            </div>
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

        {/* Leave Balance Cards */}
        <div className="leave-balance-section">
          <div className="leave-card cl-card">
            <div className="leave-header">
              <span className="leave-icon">🏖️</span>
              <span className="leave-title">Casual Leave (CL)</span>
            </div>
            <div className="leave-stats">
              <div className="leave-stat">
                <span className="leave-number">{leaveBalances.cl.remaining}</span>
                <span className="leave-label">Available</span>
              </div>
              <div className="leave-stat">
                <span className="leave-number">{leaveBalances.cl.used}</span>
                <span className="leave-label">Used</span>
              </div>
              <div className="leave-stat">
                <span className="leave-number">{leaveBalances.cl.total}</span>
                <span className="leave-label">Total</span>
              </div>
            </div>
            <div className="leave-note">✓ Carry Forward | 1 per month</div>
            {leaveBalances.halfDays > 0 && (
              <div className="leave-info">Half Days: {leaveBalances.halfDays} (deducted {leaveBalances.halfDays * 0.5} CL)</div>
            )}
          </div>

          <div className="leave-card sl-card">
            <div className="leave-header">
              <span className="leave-icon">🤒</span>
              <span className="leave-title">Sick Leave (SL)</span>
            </div>
            <div className="leave-stats">
              <div className="leave-stat">
                <span className="leave-number">{leaveBalances.sl.remaining}</span>
                <span className="leave-label">Available</span>
              </div>
              <div className="leave-stat">
                <span className="leave-number">{leaveBalances.sl.used}</span>
                <span className="leave-label">Used</span>
              </div>
              <div className="leave-stat">
                <span className="leave-number">{leaveBalances.sl.total}</span>
                <span className="leave-label">Total</span>
              </div>
            </div>
            <div className="leave-note">✗ No Carry Forward | 1 per month</div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card stat-total">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{stats.total}</h3>
              <p>Total Records</p>
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
          
          <div className="stat-card stat-leave">
            <div className="stat-icon">🏖️</div>
            <div className="stat-content">
              <h3>{stats.casualLeave + stats.sickLeave}</h3>
              <p>Total Leaves</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header-with-filters">
            <h2>Attendance History</h2>
            
            <div className="filters-section">
              <div className="filter-group">
                <label>Month:</label>
                <select 
                  value={selectedMonth} 
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="all">All Months</option>
                  {months.map(month => (
                    <option key={month.value} value={month.value}>{month.label}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Year:</label>
                <select 
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="all">All Years</option>
                  {availableYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Status:</label>
                <select 
                  value={selectedStatus} 
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Half Day">Half Day</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                </select>
              </div>

              <button 
                onClick={refreshData}
                className="btn btn-secondary"
                disabled={globalLoading}
              >
                {globalLoading ? 'Refreshing...' : '🔄 Refresh'}
              </button>
            </div>
          </div>
          
          {filteredAttendance.length === 0 ? (
            <div className="empty-state">
              <p>No attendance records found for the selected filters</p>
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
                  {filteredAttendance.map((record) => (
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
