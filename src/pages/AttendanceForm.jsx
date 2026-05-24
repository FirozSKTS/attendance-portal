import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useData } from '../context/DataContext'
import { db } from '../firebase/config'
import { ref, push, set, remove } from 'firebase/database'
import { format } from 'date-fns'
import './AttendanceForm.css'

function AttendanceForm() {
  const { user } = useAuth()
  const { userAttendance, refreshData, loading: globalLoading } = useData()
  const [leaveType, setLeaveType] = useState('')
  const [leaveDate, setLeaveDate] = useState('')
  const [description, setDescription] = useState('')
  const [attachment, setAttachment] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [pendingLeaves, setPendingLeaves] = useState([])

  // Use global data instead of local state
  const submittedRecords = userAttendance

  // Remove local fetch function - using global data
  // useEffect and fetchLeaveRecords removed

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Convert to base64 for storage (for small files)
      const reader = new FileReader()
      reader.onloadend = () => {
        setAttachment({
          name: file.name,
          type: file.type,
          data: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddLeave = (e) => {
    e.preventDefault()
    
    if (!leaveType || !leaveDate) {
      setMessage({ type: 'error', text: 'Please fill in Type and Date' })
      return
    }

    // Add to pending leaves list
    const newLeave = {
      id: Date.now(), // Temporary ID
      type: leaveType,
      date: leaveDate,
      description: description || '',
      attachment: attachment
    }

    setPendingLeaves([...pendingLeaves, newLeave])
    
    // Reset form
    setLeaveType('')
    setLeaveDate('')
    setDescription('')
    setAttachment(null)
    if (document.getElementById('file-input')) {
      document.getElementById('file-input').value = ''
    }
    
    setMessage({ type: 'success', text: 'Leave added! Click Submit All to save.' })
  }

  const handleRemovePending = (id) => {
    setPendingLeaves(pendingLeaves.filter(leave => leave.id !== id))
  }

  const handleSubmitAll = async () => {
    console.log('🔵 handleSubmitAll called!')
    console.log('🔵 User:', user)
    console.log('🔵 Pending leaves:', pendingLeaves)
    
    if (pendingLeaves.length === 0) {
      setMessage({ type: 'error', text: 'No leaves to submit' })
      return
    }

    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      console.log('🔵 Starting submission to Realtime Database...')
      
      const attendanceRef = ref(db, 'attendance')
      
      // Submit all leaves
      for (const leave of pendingLeaves) {
        const selectedDate = new Date(leave.date)
        const monthYear = format(selectedDate, 'MMMM yyyy')

        const dataToSubmit = {
          employeeId: user.uid,
          employeeName: user.name,
          employeeEmail: user.email,
          date: selectedDate.toISOString(),
          status: leave.type,
          remarks: leave.description || '',
          attachment: leave.attachment || null,
          submittedAt: new Date().toISOString(),
          month: monthYear
        }

        console.log('🔵 Submitting leave:', leave.type, 'for', leave.date)
        
        // Push creates a new unique ID automatically
        const newRecordRef = push(attendanceRef)
        await set(newRecordRef, dataToSubmit)
        
        console.log('✅ Submitted successfully! ID:', newRecordRef.key)
      }

      console.log('✅ All leaves submitted!')
      setMessage({ type: 'success', text: `Successfully submitted ${pendingLeaves.length} leave(s)!` })
      setPendingLeaves([])
      
      // Refresh global data
      await refreshData()
    } catch (error) {
      console.error('❌ Submission Error:', error)
      console.error('❌ Error code:', error.code)
      console.error('❌ Error message:', error.message)
      
      setMessage({ 
        type: 'error', 
        text: `Submission failed: ${error.message}` 
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteSubmitted = async (recordId) => {
    if (!window.confirm('Are you sure you want to delete this record?')) {
      return
    }

    try {
      const recordRef = ref(db, `attendance/${recordId}`)
      await remove(recordRef)
      setMessage({ type: 'success', text: 'Record deleted successfully!' })
      await refreshData()
    } catch (error) {
      console.error('Error deleting:', error)
      setMessage({ type: 'error', text: 'Failed to delete record.' })
    }
  }

  const getStatusBadge = (status) => {
    const badges = {
      'Casual Leave': 'badge-info',
      'Sick Leave': 'badge-warning',
      'Half Day': 'badge-warning'
    }
    return badges[status] || 'badge-secondary'
  }

  return (
    <div className="attendance-form-page">
      <div className="container">
        <div className="card">
          <h1>Mark Attendance</h1>
          <p className="subtitle">Add leave/absence records. All unmarked working days are considered Present.</p>

          {message.text && (
            <div className={`alert alert-${message.type}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleAddLeave} className="leave-form">
            <div className="form-inline">
              <div className="form-group-inline">
                <label>Type <span className="required">*</span></label>
                <select
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Half Day">Half Day</option>
                </select>
              </div>

              <div className="form-group-inline">
                <label>Date <span className="required">*</span></label>
                <input
                  type="date"
                  value={leaveDate}
                  onChange={(e) => setLeaveDate(e.target.value)}
                  max={format(new Date(), 'yyyy-MM-dd')}
                  required
                />
              </div>

              <div className="form-group-inline">
                <label>Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Reason (optional)"
                />
              </div>

              <div className="form-group-inline">
                <label>Attachment</label>
                <input
                  id="file-input"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="file-input-compact"
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-inline"
              >
                + Add Leave
              </button>
            </div>

            {attachment && (
              <div className="file-preview-compact">
                📎 {attachment.name}
                <button
                  type="button"
                  onClick={() => {
                    setAttachment(null)
                    document.getElementById('file-input').value = ''
                  }}
                  className="btn-remove-file"
                >
                  ✕
                </button>
              </div>
            )}
          </form>

          {/* Pending Leaves Table */}
          {pendingLeaves.length > 0 && (
            <div className="simple-card" style={{ marginTop: '30px' }}>
              <h3>Pending Leaves ({pendingLeaves.length})</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Attachment</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingLeaves.map((leave) => (
                      <tr key={leave.id}>
                        <td>{format(new Date(leave.date), 'dd MMM yyyy')}</td>
                        <td>
                          <span className={`badge ${getStatusBadge(leave.type)}`}>
                            {leave.type}
                          </span>
                        </td>
                        <td>{leave.description || '-'}</td>
                        <td>
                          {leave.attachment ? `📎 ${leave.attachment.name}` : '-'}
                        </td>
                        <td>
                          <button
                            onClick={() => handleRemovePending(leave.id)}
                            className="btn-delete"
                            title="Remove"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button 
                  onClick={handleSubmitAll}
                  className="btn btn-primary"
                  disabled={loading}
                  style={{ minWidth: '200px' }}
                >
                  {loading ? 'Submitting...' : `Submit All (${pendingLeaves.length})`}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Submitted Records */}
        {submittedRecords.length > 0 ? (
          <div className="simple-card">
            <h2>Submitted Leave Records</h2>
            
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Attachment</th>
                    <th>Submitted</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedRecords.map((record) => (
                    <tr key={record.id}>
                      <td>{format(new Date(record.date), 'dd MMM yyyy')}</td>
                      <td>
                        <span className={`badge ${getStatusBadge(record.status)}`}>
                          {record.status}
                        </span>
                      </td>
                      <td>{record.remarks || '-'}</td>
                      <td>
                        {record.attachment ? (
                          <a 
                            href={record.attachment.data} 
                            download={record.attachment.name}
                            className="attachment-link"
                          >
                            📎 {record.attachment.name}
                          </a>
                        ) : '-'}
                      </td>
                      <td>{format(new Date(record.submittedAt), 'dd MMM yyyy')}</td>
                      <td>
                        <button
                          onClick={() => handleDeleteSubmitted(record.id)}
                          className="btn-delete"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button 
                onClick={refreshData}
                className="btn btn-secondary"
                disabled={loading || globalLoading}
              >
                {(loading || globalLoading) ? 'Refreshing...' : '🔄 Refresh Records'}
              </button>
            </div>
          </div>
        ) : (
          <div className="simple-card">
            <h2>Submitted Leave Records</h2>
            <div className="empty-state">
              <p>{loading ? 'Loading your records...' : 'No records found'}</p>
              {!loading && !globalLoading && (
                <button 
                  onClick={refreshData}
                  className="btn btn-secondary"
                  style={{ marginTop: '10px' }}
                >
                  🔄 Refresh
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AttendanceForm
