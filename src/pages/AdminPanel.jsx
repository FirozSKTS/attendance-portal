import React, { useState, useEffect } from 'react'
import { useData } from '../context/DataContext'
import { format } from 'date-fns'
import { db } from '../firebase/config'
import { ref, push, set, get } from 'firebase/database'
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
  
  // Add Employee Modal State
  const [showAddEmployee, setShowAddEmployee] = useState(false)
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    username: '',
    employeeId: '',
    email: '',
    password: '',
    isAdmin: false
  })
  const [addingEmployee, setAddingEmployee] = useState(false)
  const [addError, setAddError] = useState('')
  const [addSuccess, setAddSuccess] = useState('')

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

  // Handle Add Employee
  const handleAddEmployee = async (e) => {
    e.preventDefault()
    setAddError('')
    setAddSuccess('')
    setAddingEmployee(true)

    try {
      console.log('Starting to add employee:', newEmployee.username)
      
      // Validate username uniqueness
      const usersRef = ref(db, 'users')
      const usersSnapshot = await get(usersRef)
      
      console.log('Users snapshot exists:', usersSnapshot.exists())
      
      if (usersSnapshot.exists()) {
        const users = usersSnapshot.val()
        console.log('Existing users:', Object.keys(users).length)
        
        const usernameExists = Object.values(users).some(
          user => user.username?.toLowerCase() === newEmployee.username.toLowerCase()
        )
        
        if (usernameExists) {
          setAddError('Username already exists. Please choose a different username.')
          setAddingEmployee(false)
          return
        }

        const employeeIdExists = Object.values(users).some(
          user => user.employeeId === newEmployee.employeeId
        )
        
        if (employeeIdExists) {
          setAddError('Employee ID already exists. Please use a different ID.')
          setAddingEmployee(false)
          return
        }
      }

      // Create new user in Realtime Database
      console.log('Creating new user in Realtime Database...')
      const newUserRef = push(usersRef)
      await set(newUserRef, {
        name: newEmployee.name,
        username: newEmployee.username.toLowerCase(),
        employeeId: newEmployee.employeeId,
        email: newEmployee.email,
        password: newEmployee.password,
        isAdmin: newEmployee.isAdmin,
        createdAt: new Date().toISOString()
      })

      console.log('Employee added successfully!')
      setAddSuccess(`✅ Employee "${newEmployee.name}" added successfully!`)
      
      // Reset form
      setNewEmployee({
        name: '',
        username: '',
        employeeId: '',
        email: '',
        password: '',
        isAdmin: false
      })
      
      // Refresh data and close modal after 2 seconds
      setTimeout(() => {
        console.log('Refreshing data and closing modal...')
        refreshData()
        setShowAddEmployee(false)
        setAddSuccess('')
      }, 2000)

    } catch (error) {
      console.error('Error adding employee:', error)
      console.error('Error code:', error.code)
      console.error('Error message:', error.message)
      
      let errorMessage = 'Failed to add employee. '
      
      if (error.code === 'PERMISSION_DENIED') {
        errorMessage += 'Permission denied. Make sure you are logged in as admin and database rules allow writes.'
      } else if (error.message) {
        errorMessage += error.message
      } else {
        errorMessage += 'Please check console for details.'
      }
      
      setAddError(errorMessage)
    } finally {
      setAddingEmployee(false)
    }
  }

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
          <button 
            onClick={() => setShowAddEmployee(true)} 
            className="btn btn-success"
            style={{ marginTop: '10px' }}
          >
            ➕ Add New Employee
          </button>
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

        {/* Add Employee Modal */}
        {showAddEmployee && (
          <div className="modal-overlay" onClick={() => setShowAddEmployee(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Add New Employee</h2>
                <button 
                  className="close-button" 
                  onClick={() => setShowAddEmployee(false)}
                >
                  ✕
                </button>
              </div>

              {addError && (
                <div className="error-message" style={{ marginBottom: '15px' }}>
                  {addError}
                </div>
              )}

              {addSuccess && (
                <div className="success-message" style={{ 
                  marginBottom: '15px', 
                  padding: '12px 15px', 
                  backgroundColor: '#d4edda', 
                  color: '#155724', 
                  borderRadius: '6px',
                  border: '1px solid #c3e6cb',
                  fontWeight: '600',
                  fontSize: '15px'
                }}>
                  {addSuccess}
                </div>
              )}

              <form onSubmit={handleAddEmployee} className="add-employee-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                    placeholder="Enter full name"
                    required
                    disabled={addingEmployee}
                  />
                </div>

                <div className="form-group">
                  <label>Username * (for login)</label>
                  <input
                    type="text"
                    value={newEmployee.username}
                    onChange={(e) => setNewEmployee({...newEmployee, username: e.target.value})}
                    placeholder="Enter username (e.g., john.doe)"
                    required
                    disabled={addingEmployee}
                    pattern="[a-zA-Z0-9._\-]+"
                    title="Username can only contain letters, numbers, dots, underscores, and hyphens"
                  />
                </div>

                <div className="form-group">
                  <label>Employee ID *</label>
                  <input
                    type="text"
                    value={newEmployee.employeeId}
                    onChange={(e) => setNewEmployee({...newEmployee, employeeId: e.target.value})}
                    placeholder="Enter employee ID (e.g., EMP001)"
                    required
                    disabled={addingEmployee}
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                    placeholder="Enter email address"
                    required
                    disabled={addingEmployee}
                  />
                </div>

                <div className="form-group">
                  <label>Password *</label>
                  <input
                    type="password"
                    value={newEmployee.password}
                    onChange={(e) => setNewEmployee({...newEmployee, password: e.target.value})}
                    placeholder="Enter password"
                    required
                    disabled={addingEmployee}
                    minLength="6"
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="checkbox"
                      checked={newEmployee.isAdmin}
                      onChange={(e) => setNewEmployee({...newEmployee, isAdmin: e.target.checked})}
                      disabled={addingEmployee}
                    />
                    <span>Admin User (can access Admin Panel)</span>
                  </label>
                </div>

                <div className="modal-actions">
                  <button 
                    type="button" 
                    onClick={() => setShowAddEmployee(false)}
                    className="btn btn-secondary"
                    disabled={addingEmployee}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={addingEmployee}
                  >
                    {addingEmployee ? 'Adding...' : 'Add Employee'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel
