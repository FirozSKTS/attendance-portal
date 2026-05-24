import { createContext, useState, useContext, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { db } from '../firebase/config'
import { ref, query, orderByChild, equalTo, get } from 'firebase/database'

const DataContext = createContext()

export function useData() {
  return useContext(DataContext)
}

export function DataProvider({ children }) {
  const { user } = useAuth()
  const [userAttendance, setUserAttendance] = useState([])
  const [allAttendance, setAllAttendance] = useState([])
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false)

  // Fetch all data when user logs in
  useEffect(() => {
    if (user?.uid && !dataLoaded) {
      fetchAllData()
    }
  }, [user?.uid])

  const fetchAllData = async () => {
    if (!user?.uid) return
    
    setLoading(true)
    try {
      // Fetch user's attendance
      const attendanceRef = ref(db, 'attendance')
      const userQuery = query(attendanceRef, orderByChild('employeeId'), equalTo(user.uid))
      const userSnapshot = await get(userQuery)
      
      const userRecords = []
      if (userSnapshot.exists()) {
        userSnapshot.forEach((childSnapshot) => {
          userRecords.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
      }
      userRecords.sort((a, b) => new Date(b.date) - new Date(a.date))
      setUserAttendance(userRecords)

      // Fetch all attendance (for admin)
      const allSnapshot = await get(attendanceRef)
      const allRecords = []
      if (allSnapshot.exists()) {
        allSnapshot.forEach((childSnapshot) => {
          allRecords.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
      }
      allRecords.sort((a, b) => new Date(b.date) - new Date(a.date))
      setAllAttendance(allRecords)

      // Fetch employees
      const usersRef = ref(db, 'users')
      const usersSnapshot = await get(usersRef)
      const employeeList = []
      if (usersSnapshot.exists()) {
        usersSnapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val()
          if (!data.isAdmin) {
            employeeList.push({ id: childSnapshot.key, ...data })
          }
        })
      }
      setEmployees(employeeList)

      setDataLoaded(true)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const refreshData = async () => {
    setDataLoaded(false)
    await fetchAllData()
  }

  const value = {
    userAttendance,
    allAttendance,
    employees,
    loading,
    dataLoaded,
    refreshData
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
