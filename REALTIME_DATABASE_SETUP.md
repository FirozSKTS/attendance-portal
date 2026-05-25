# ✅ Realtime Database Setup Guide

## 🎯 Current Status

**Database**: Realtime Database (reverted from Firestore)  
**What You Need**: Add your admin user to Realtime Database

---

## 📋 Step-by-Step Setup

### Step 1: Go to Firebase Console

1. Visit: https://console.firebase.google.com/
2. Select project: **skts-attendance-portal**
3. Click **"Realtime Database"** in left sidebar (NOT Firestore)

### Step 2: Add Your Admin User

You need to add your admin user data to match your Firebase Authentication email.

#### Option A: Manual Entry (Recommended)

1. In Realtime Database, click the **"+"** icon next to `users`
2. **Key**: Leave blank (Firebase will auto-generate)
3. Click **"+"** to add fields:

```
Field 1:
Key: name
Value: Firoz

Field 2:
Key: username
Value: firoz

Field 3:
Key: employeeId
Value: ADMIN001

Field 4:
Key: email
Value: firozs@smartkrowtechnology.com

Field 5:
Key: password
Value: [your login password]

Field 6:
Key: isAdmin
Value: true

Field 7:
Key: createdAt
Value: 2026-05-24T10:00:00.000Z
```

4. Click **"Add"**

#### Option B: Import JSON (Faster)

1. Click on `users` node
2. Click the **"⋮"** menu → **"Import JSON"**
3. Paste this (replace with your details):

```json
{
  "-NewAdminUser001": {
    "name": "Firoz",
    "username": "firoz",
    "employeeId": "ADMIN001",
    "email": "firozs@smartkrowtechnology.com",
    "password": "your_password_here",
    "isAdmin": true,
    "createdAt": "2026-05-24T10:00:00.000Z"
  }
}
```

4. Click **"Import"**

### Step 3: Verify Database Structure

Your Realtime Database should now look like this:

```
skts-attendance-portal-default-rtdb
├── attendance
│   └── (attendance records)
└── users
    ├── -Ot0BXhFF8lJ_g3V4Hwy (existing user - ChanduK)
    │   ├── createdAt: "2026-05-24T08:55:20.168Z"
    │   └── email: "ChanduK@smartkrowtechnology.com"
    └── -NewAdminUser001 (your new admin)
        ├── name: "Firoz"
        ├── username: "firoz"
        ├── employeeId: "ADMIN001"
        ├── email: "firozs@smartkrowtechnology.com"
        ├── password: "your_password"
        ├── isAdmin: true
        └── createdAt: "2026-05-24T10:00:00.000Z"
```

### Step 4: Create Firebase Authentication User

**Important**: The email in Realtime Database MUST match an email in Firebase Authentication!

1. Go to **Authentication** → **Users** tab
2. Check if `firozs@smartkrowtechnology.com` exists
3. If NOT, click **"Add user"**:
   - Email: `firozs@smartkrowtechnology.com`
   - Password: (same as in database)
4. Click **"Add user"**

---

## 🚀 Deploy and Test

### Deploy Changes

```bash
cd "d:/Attendance Portal/git/attendance-portal"
git add .
git commit -m "Revert to Realtime Database with username login"
git push origin main
npm run deploy
```

### Test Login

1. Go to: https://firozskts.github.io/attendance-portal/
2. **Test Email Login**:
   - Email: `firozs@smartkrowtechnology.com`
   - Password: your password
   - Should work ✅

3. **Test Username Login**:
   - Username: `firoz`
   - Password: your password
   - Should work ✅

### Test Add Employee

1. After logging in, go to **Admin Panel**
2. Click **"Add New Employee"**
3. Fill in the form:
   - Name: Test Employee
   - Username: test.user
   - Employee ID: EMP001
   - Email: test@smartkrowtechnology.com
   - Password: test123
   - Admin: No
4. Click **"Add Employee"**
5. Should see: **"✅ Employee 'Test Employee' added successfully!"**
6. Check Realtime Database - new user should appear under `/users`

### Test New Employee Login

1. Logout
2. Login with:
   - Username: `test.user`
   - Password: `test123`
3. Should work ✅

---

## 🔐 Database Rules

Make sure your Realtime Database rules allow authenticated users to read/write:

```json
{
  "rules": {
    "attendance": {
      ".read": "auth != null",
      ".write": "auth != null",
      "$recordId": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    },
    "users": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

To update rules:
1. Firebase Console → Realtime Database
2. Click **"Rules"** tab
3. Paste the rules above
4. Click **"Publish"**

---

## 🐛 Troubleshooting

### "No users found" Error

**Cause**: No users in Realtime Database

**Solution**:
1. Go to Firebase Console → Realtime Database
2. Verify `/users` node exists
3. Verify your user is under `/users`
4. Check that all required fields are present

### "User not found" When Using Username

**Cause**: Username field missing or doesn't match

**Solution**:
1. Check your user in Realtime Database
2. Verify `username` field exists
3. Username should be lowercase: `firoz` not `Firoz`
4. Try logging in with email instead

### "Invalid password" Error

**Cause**: Password in database doesn't match what you're entering

**Solution**:
1. Go to Realtime Database
2. Find your user
3. Update the `password` field
4. Make sure it matches what you're typing

### "Permission Denied" When Adding Employee

**Cause**: Not logged in or database rules don't allow writes

**Solution**:
1. Make sure you're logged in (check top right corner)
2. Verify database rules allow authenticated writes
3. Check browser console for detailed error

### Can't See "Admin Panel" Link

**Cause**: `isAdmin` field is not `true`

**Solution**:
1. Go to Realtime Database
2. Find your user under `/users`
3. Check `isAdmin` field
4. Should be boolean `true`, not string `"true"`
5. If missing, add it: Key: `isAdmin`, Value: `true` (boolean)

---

## ✅ Verification Checklist

After setup, verify these work:

- [ ] Can see your user in Realtime Database under `/users`
- [ ] User has all required fields (name, username, email, password, isAdmin, employeeId)
- [ ] Same email exists in Firebase Authentication
- [ ] Can login with email
- [ ] Can login with username
- [ ] Can see "Admin Panel" link in navigation
- [ ] Can access Admin Panel page
- [ ] Can see "Add New Employee" button
- [ ] Can open the Add Employee modal
- [ ] Can submit the form
- [ ] See success message after submission
- [ ] New employee appears in Realtime Database
- [ ] Can logout and login as new employee

---

## 📊 Database Structure Reference

### Users Node Structure

```
/users
  /{auto-generated-id}
    ├── name: string (required)
    ├── username: string (required, lowercase, unique)
    ├── employeeId: string (required, unique)
    ├── email: string (required, must match Firebase Auth)
    ├── password: string (required, plain text for now)
    ├── isAdmin: boolean (required, true or false)
    └── createdAt: string (ISO date)
```

### Attendance Node Structure

```
/attendance
  /{auto-generated-id}
    ├── employeeId: string
    ├── employeeName: string
    ├── employeeEmail: string
    ├── date: string (ISO date)
    ├── status: string
    ├── remarks: string
    ├── month: string
    └── submittedAt: string (ISO date)
```

---

## 🎯 Quick Commands

### Local Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

### Git Workflow
```bash
git add .
git commit -m "your message"
git push origin main
npm run deploy
```

---

## 📞 Need Help?

If you're still having issues:

1. **Check Browser Console** (F12 → Console tab)
2. **Look for error messages** (red text)
3. **Verify you're logged in** (check header)
4. **Check Realtime Database** to see if data is being written
5. **Share error messages** for debugging

---

**Database**: Realtime Database  
**Status**: Ready to Use  
**Last Updated**: May 24, 2026
