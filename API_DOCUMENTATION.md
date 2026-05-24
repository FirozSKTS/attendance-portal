# API Documentation - Attendance Portal

## Overview
This document lists all API calls made by the Attendance Portal application, their purposes, and when they are triggered.

---

## 🔐 Firebase Authentication APIs

### 1. **signInWithPassword**
- **Endpoint**: `identitytoolkit.googleapis.com/v1/accounts:signInWithPassword`
- **Method**: POST
- **Purpose**: Authenticate user with email and password
- **Triggered**: When user submits login form
- **File**: `src/context/AuthContext.jsx` → `login()` function
- **Request Data**:
  ```json
  {
    "email": "user@smartkrowtechnology.com",
    "password": "user_password",
    "returnSecureToken": true
  }
  ```
- **Response**: User token, uid, email, refresh token
- **Frequency**: Once per login session

---

### 2. **accounts:lookup**
- **Endpoint**: `identitytoolkit.googleapis.com/v1/accounts:lookup`
- **Method**: POST
- **Purpose**: Fetch user profile information after authentication
- **Triggered**: Automatically after successful login
- **File**: `src/context/AuthContext.jsx` → `onAuthStateChanged()` listener
- **Request Data**:
  ```json
  {
    "idToken": "firebase_auth_token"
  }
  ```
- **Response**: User details (email, displayName, uid, etc.)
- **Frequency**: Once per session, or when auth state changes

---

## 🗄️ Firestore Database APIs

### 3. **Firestore Channel Initialization**
- **Endpoint**: `firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel`
- **Method**: GET/POST (WebChannel or Long Polling)
- **Purpose**: Establish connection to Firestore database
- **Triggered**: When first Firestore query is made
- **Files**: Any page that uses `getDocs()` or `addDoc()`
- **Parameters**:
  - `VER=8`: Protocol version
  - `database=projects/skts-attendance-portal/databases/(default)`
  - `X-HTTP-Session-Id=gsessionid`
- **Frequency**: 1-2 times per page load (with optimization)
- **Note**: With `experimentalForceLongPolling: true`, uses HTTP instead of WebSocket

---

### 4. **Firestore Read Query (getDocs)**
- **Endpoint**: `firestore.googleapis.com` (via channel)
- **Method**: POST
- **Purpose**: Fetch documents from Firestore collections
- **Triggered**: When loading data on any page
- **Usage**:

#### a) **Attendance Form - Fetch User's Leave Records**
- **File**: `src/pages/AttendanceForm.jsx` → `fetchLeaveRecords()`
- **Collection**: `attendance`
- **Query**:
  ```javascript
  query(
    collection(db, 'attendance'),
    where('employeeId', '==', user.uid)
  )
  ```
- **Purpose**: Show user's submitted leave records
- **Frequency**: Once on page load, once after submit

#### b) **Dashboard - Fetch User's Attendance**
- **File**: `src/pages/Dashboard.jsx` → `fetchAttendance()`
- **Collection**: `attendance`
- **Query**:
  ```javascript
  query(
    collection(db, 'attendance'),
    where('employeeId', '==', user.uid)
  )
  ```
- **Purpose**: Display attendance statistics and history
- **Frequency**: Once on page load

#### c) **Admin Panel - Fetch All Employees**
- **File**: `src/pages/AdminPanel.jsx` → `loadEmployees()`
- **Collection**: `users`
- **Query**:
  ```javascript
  getDocs(collection(db, 'users'))
  ```
- **Purpose**: Get list of all employees for filter dropdown
- **Frequency**: Once on page load
- **Note**: Currently returns empty (no users collection implemented)

#### d) **Admin Panel - Fetch All Attendance Records**
- **File**: `src/pages/AdminPanel.jsx` → `loadAttendance()`
- **Collection**: `attendance`
- **Query**:
  ```javascript
  // All records
  query(collection(db, 'attendance'))
  
  // Filtered by employee
  query(
    collection(db, 'attendance'),
    where('employeeId', '==', selectedEmployee)
  )
  
  // Filtered by month
  query(
    collection(db, 'attendance'),
    where('month', '==', selectedMonth)
  )
  
  // Filtered by both
  query(
    collection(db, 'attendance'),
    where('employeeId', '==', selectedEmployee),
    where('month', '==', selectedMonth)
  )
  ```
- **Purpose**: Display all employees' attendance for admin view
- **Frequency**: Once on page load, once per filter change

---

### 5. **Firestore Write (addDoc)**
- **Endpoint**: `firestore.googleapis.com` (via channel)
- **Method**: POST
- **Purpose**: Create new documents in Firestore
- **Triggered**: When user submits attendance/leave records
- **Usage**:

#### a) **Submit Attendance/Leave Records**
- **File**: `src/pages/AttendanceForm.jsx` → `handleSubmitAll()`
- **Collection**: `attendance`
- **Document Data**:
  ```javascript
  {
    employeeId: "firebase_user_uid",
    employeeName: "User Name",
    employeeEmail: "user@smartkrowtechnology.com",
    date: Timestamp.fromDate(selectedDate),
    status: "Casual Leave" | "Sick Leave" | "Half Day",
    remarks: "Optional description",
    attachment: { name, type, data } | null,
    submittedAt: Timestamp.now(),
    month: "May 2026"
  }
  ```
- **Frequency**: Once per leave record (parallel batch)
- **Note**: Uses `Promise.all()` to submit multiple records simultaneously

#### b) **Test Connection (Test Page Only)**
- **File**: `src/pages/TestConnection.jsx` → `handleTestWrite()`
- **Collection**: `test`
- **Document Data**:
  ```javascript
  {
    message: "Test write",
    timestamp: new Date(),
    test: "connection test"
  }
  ```
- **Purpose**: Verify Firestore write permissions
- **Frequency**: Only when manually triggered on `/test` page

---

### 6. **Firestore Delete (deleteDoc)**
- **Endpoint**: `firestore.googleapis.com` (via channel)
- **Method**: POST
- **Purpose**: Delete documents from Firestore
- **Triggered**: When user deletes a submitted leave record
- **File**: `src/pages/AttendanceForm.jsx` → `handleDeleteSubmitted()`
- **Collection**: `attendance`
- **Usage**:
  ```javascript
  deleteDoc(doc(db, 'attendance', recordId))
  ```
- **Frequency**: Once per delete action (with confirmation)

---

## 📊 Summary Table

| API Call | Endpoint | Method | Purpose | Frequency | File |
|----------|----------|--------|---------|-----------|------|
| **signInWithPassword** | identitytoolkit.googleapis.com | POST | User login | Once per session | AuthContext.jsx |
| **accounts:lookup** | identitytoolkit.googleapis.com | POST | Get user info | Once per session | AuthContext.jsx |
| **Firestore Channel** | firestore.googleapis.com | GET/POST | Initialize DB connection | 1-2 per page | All pages with DB |
| **getDocs (attendance)** | firestore.googleapis.com | POST | Fetch attendance records | 1-2 per page | AttendanceForm, Dashboard, AdminPanel |
| **getDocs (users)** | firestore.googleapis.com | POST | Fetch employee list | Once on admin page | AdminPanel.jsx |
| **addDoc (attendance)** | firestore.googleapis.com | POST | Submit leave records | Per leave record | AttendanceForm.jsx |
| **deleteDoc (attendance)** | firestore.googleapis.com | POST | Delete leave record | Per delete action | AttendanceForm.jsx |

---

## 🔢 Expected Network Requests Per Action

### **Login Flow**
1. `signInWithPassword` - 1 call
2. `accounts:lookup` - 1 call
3. Firestore channel init - 1-2 calls
**Total: 3-4 requests**

### **Dashboard Page Load**
1. Firestore channel (if not already open) - 1 call
2. `getDocs(attendance)` - 1 call
**Total: 1-2 requests**

### **Attendance Form Page Load**
1. Firestore channel (if not already open) - 1 call
2. `getDocs(attendance)` - 1 call (fetch existing records)
**Total: 1-2 requests**

### **Submit Attendance (3 leaves)**
1. `addDoc(attendance)` - 3 calls (parallel)
2. `getDocs(attendance)` - 1 call (refresh list)
**Total: 4 requests**

### **Admin Panel Page Load**
1. Firestore channel (if not already open) - 1 call
2. `getDocs(users)` - 1 call
3. `getDocs(attendance)` - 1 call
**Total: 2-3 requests**

### **Delete Leave Record**
1. `deleteDoc(attendance)` - 1 call
2. `getDocs(attendance)` - 1 call (refresh list)
**Total: 2 requests**

---

## 🚫 APIs NOT Used (But Available)

### **onSnapshot (Real-time Listener)**
- **Purpose**: Listen to real-time database changes
- **Why Not Used**: Not needed for this app, causes excessive network calls
- **Alternative**: Using `getDocs()` for one-time queries

### **updateDoc (Update Document)**
- **Purpose**: Update existing documents
- **Why Not Used**: Current workflow is add/delete only, no edit feature
- **Future Use**: If you add "Edit Leave" feature

### **setDoc (Set Document with ID)**
- **Purpose**: Create/overwrite document with custom ID
- **Why Not Used**: Using `addDoc()` with auto-generated IDs
- **Alternative**: `addDoc()` is simpler for our use case

---

## 🔧 Optimization Settings

### Current Configuration (config.js)
```javascript
{
  localCache: memoryLocalCache(),
  experimentalForceLongPolling: true,
  experimentalAutoDetectLongPolling: false
}
```

**What This Does**:
- ✅ Uses HTTP long polling instead of WebSocket
- ✅ Memory-only cache (no IndexedDB)
- ✅ Fewer persistent connections
- ✅ Simpler network behavior

---

## 🐛 Troubleshooting

### Too Many Channel Requests?
- **Cause**: Multiple components making simultaneous queries
- **Fix**: Ensure `useEffect` dependencies are correct (`[user?.uid]` not `[user]`)

### Stuck "Submitting..." State?
- **Cause**: Firestore connection timeout
- **Fix**: Check network, verify Firebase credentials, use long polling

### "Permission Denied" Errors?
- **Cause**: Firestore security rules blocking access
- **Fix**: Check `firestore.rules` file, ensure user is authenticated

### Empty Data on Admin Panel?
- **Cause**: No `users` collection in Firestore
- **Fix**: This is expected - using Firebase Auth directly, not storing users in Firestore

---

## 📝 Notes

1. **API Key in URL**: The `?key=AIzaSy...` in URLs is normal and safe for client-side Firebase apps
2. **Session IDs**: The `gsessionid` parameters are Firestore's way of managing connections
3. **200 Status Codes**: These are successful responses, not errors
4. **Batch Operations**: Multiple `addDoc` calls run in parallel for better performance
5. **No Real-time Updates**: App uses one-time queries, not live listeners

---

## 🔐 Security

- All API calls require authentication (except login)
- Firestore rules enforce user can only read/write their own data
- Admin users can read all data (isAdmin: true)
- API keys are stored in `.env.local` (not committed to git)
- All communication over HTTPS

---

## 📚 Related Files

- **Firebase Config**: `src/firebase/config.js`
- **Auth Logic**: `src/context/AuthContext.jsx`
- **Security Rules**: `firestore.rules`
- **Environment Variables**: `.env.local`
- **Network Optimization**: `NETWORK_OPTIMIZATION.md`
