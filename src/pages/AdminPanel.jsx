import React, { useState, useEffect } from 'react'
import { useData } from '../context/DataContext'
import { format } from 'date-fns'
import './AdminPanel.css'

function AdminPanel() {
  const { allAttendance, employees, loading: globalLoading, dataLoaded, refreshData } = useData()
  const [attendanceRecords, setAttendanceRecords] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState('all')
  const [selectedMonth, setSelectedMonth] = useState(format(new Date(), 'MMMM yyyy'))
  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalRecords: 0,
    presentCount: 0,
    absentCount: 0
  })

  // Filter data based on selected filters
  useEffect(() => {
    if (allAttendance.length > 0) {
      let filtered = [...allAttendance]
      
      // Apply employee filter
      if (selectedEmployee !== 'all') {
        filtered = filtered.filter(record => record.employeeId === selectedEmployee)
      }
      
      // Apply month filter
      if (selectedMonth !== 'all') {
        filtered = filtered.filter(record => record.month === selectedMonth)
      }
      
      // Calculate stats
      let present = 0, absent = 0
      filtered.forEach(record => {
        if (record.status === 'Present') present++
        else if (record.status === 'Absent') absent++
      })
      
      setAttendanceRecords(filtered)
      setStats({
        totalEmployees: employees.length,
        totalRecords: filtered.length,
        presentCount: present,
        absentCount: absent
      })
    }
  }, [allAttendance, employees, selectedEmployee, selectedMonth])

  const exportToCSV = () => {
    const headers = ['Employee Name', 'Employee ID', 'Date', 'Month', 'Status', 'Remarks', 'Submitted At']
    const rows = attendanceRecords.map(record => [
      record.employeeName,
      record.employeeEmail,
      format(new Date(record.date), 'dd/MM/yyyy'),
      record.month,
      record.status,
      record.remarks || '-',
      format(new Date(record.submittedAt), 'dd/MM/yyyy HH:mm')
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `attendance_${selectedMonth}_${new Date().getTime()}.csv`
    a.click()
  }

  const getStatusBadge = (status) => {
    const badges = {
      'Present': 'badge-success',
      'Absent': 'badge-danger',
      'Half Day': 'badge-warning',
      'Leave': 'badge-info'
    }
    return badges[status] || 'badge-secondary'
  }

  // Get unique months from all attendance data
  const uniqueMonths = [...new Set(allAttendance.map(r => r.month))]

  if (globalLoading && !dataLoaded) {
    return (
      <div className="admin-panel-page">
        <div className="container">
          <div className="admin-header">
            <h1>Admin Panel</h1>
            <p>Manage and view all employee attendance records</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3>...</h3>
                <p>Total Employees</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <h3>...</h3>
                <p>Total Records</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <h3>...</h3>
                <p>Present</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">❌</div>
              <div className="stat-content">
                <h3>...</h3>
                <p>Absent</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2>Attendance Records</h2>
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <p>Loading attendance data...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-panel-page">
      <div className="container">
        <div className="admin-header">
          <h1>Admin Panel</h1>
          <p>Manage and view all employee attendance records</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>{stats.totalEmployees}</h3>
              <p>Total Employees</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{stats.totalRecords}</h3>
              <p>Total Records</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{stats.presentCount}</h3>
              <p>Present Days</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">❌</div>
            <div className="stat-content">
              <h3>{stats.absentCount}</h3>
              <p>Absent Days</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="filters-section">
            <div className="filter-group">
              <label>Filter by Employee:</label>
              <select 
                value={selectedEmployee} 
                onChange={(e) => {
                  setSelectedEmployee(e.target.value)
                }}
              >
                <option value="all">All Employees</option>
                {employees.map(emp => (
                  <option key={emp.id} value={emp.id}>
                    {emp.name} ({emp.employeeId})
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Filter by Month:</label>
              <select 
                value={selectedMonth} 
                onChange={(e) => {
                  setSelectedMonth(e.target.value)
                }}
              >
                <option value="all">All Months</option>
                {uniqueMonths.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

            <button 
              onClick={refreshData}
              className="btn btn-secondary"
              disabled={globalLoading}
            >
              {globalLoading ? 'Refreshing...' : '🔄 Refresh Data'}
            </button>

            <button onClick={exportToCSV} className="btn btn-primary">
              📥 Export to CSV
            </button>
          </div>

          {globalLoading ? (
            <div className="loading">Loading attendance records...</div>
          ) : attendanceRecords.length === 0 ? (
            <div className="empty-state">
              <p>No attendance records found</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Employee ID</th>
                    <th>Date</th>
                    <th>Month</th>
                    <th>Status</th>
                    <th>Remarks</th>
                    <th>Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceRecords.map((record) => (
                    <tr key={record.id}>
                      <td>{record.employeeName}</td>
                      <td>{record.employeeEmail}</td>
                      <td>{format(new Date(record.date), 'dd MMM yyyy')}</td>
                      <td>{record.month}</td>
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

export default AdminPanel
