# Setup First Admin User - Step by Step Guide

## ⚠️ Important: You Need to Setup Your First Admin User

The "Add Employee" feature requires you to be logged in. But to login, you need at least one user in the system. Here's how to set it up:

---

## 🔧 Method 1: Using Firebase Console (Recommended)

### Step 1: Create User in Firebase Authentication

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Select project: **skts-attendance-portal**

2. **Navigate to Authentication**
   - Click **"Authentication"** in left sidebar
   - Click **"Users"** tab
   - Click **"Add user"** button

3. **Add Your Admin User**
   - **Email**: `firozs@smartkrowtechnology.com`
   - **Password**: Choose a strong password (remember it!)
   - Click **"Add user"**

4. **Copy the User UID**
   - After creating, you'll see the user in the list
   - Click on the user
   - **Copy the UID** (looks like: `xYz123AbC456...`)
   - Keep this for the next step

### Step 2: Add User to Realtime Database

1. **Navigate to Realtime Database**
   - Click **"Realtime Database"** in left sidebar
   - You should see your database URL

2. **Create Users Collection**
   - Click the **"+"** icon next to the database root
   - **Key**: `users`
   - Click **"+"** again to add a child

3. **Add Your Admin User Data**
   - **Key**: Paste the **UID you copied** (e.g., `xYz123AbC456`)
   - Click **"+"** to add fields:

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
   Value: [same password you used in Authentication]

   Field 6:
   Key: isAdmin
   Value: true (boolean)

   Field 7:
   Key: createdAt
   Value: 2026-05-24T10:00:00.000Z
   ```

4. **Click "Add"**

### Step 3: Test Login

1. Go to your app: https://firozskts.github.io/attendance-portal/
2. Try logging in with:
   - **Email**: `firozs@smartkrowtechnology.com`
   - **Password**: [the password you set]
3. You should successfully login!

### Step 4: Now You Can Add More Employees

1. After logging in, go to **Admin Panel**
2. Click **"Add New Employee"**
3. Fill in the form and submit
4. The new employee will be added to the database
5. They can login immediately with their username or email

---

## 🔧 Method 2: Temporary Open Database (Quick Test)

**⚠️ WARNING: This makes your database publicly writable. Only use for testing, then revert!**

### Step 1: Temporarily Open Database Rules

1. Go to Firebase Console → Realtime Database
2. Click **"Rules"** tab
3. Replace with:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
4. Click **"Publish"**

### Step 2: Add Employee Through App

1. Go to your app (even without logging in)
2. Manually navigate to: `https://firozskts.github.io/attendance-portal/admin`
3. Click "Add New Employee"
4. Add your admin user:
   - Name: Firoz
   - Username: firoz
   - Employee ID: ADMIN001
   - Email: firozs@smartkrowtechnology.com
   - Password: your_password
   - Check "Admin User"
5. Submit

### Step 3: Create Firebase Auth User

1. Go to Firebase Console → Authentication
2. Add user with same email and password

### Step 4: **IMPORTANT: Restore Security Rules**

1. Go back to Realtime Database → Rules
2. Replace with secure rules:
   ```json
   {
     "rules": {
       "attendance": {
         ".read": "auth != null",
         ".write": "auth != null"
       },
       "users": {
         ".read": "auth != null",
         ".write": "auth != null"
       }
     }
   }
   ```
3. Click **"Publish"**

### Step 5: Test Login

1. Go to your app
2. Login with email and password
3. Should work now!

---

## 🐛 Troubleshooting

### "Permission Denied" Error

**Cause**: You're not logged in, or database rules don't allow writes

**Solution**:
1. Make sure you're logged in (check top right corner)
2. Verify database rules allow authenticated writes
3. Check browser console for detailed error

### "No Success Message" After Adding Employee

**Cause**: JavaScript error or database write failed

**Solution**:
1. Open browser console (F12)
2. Look for red error messages
3. Check if you see "Employee added successfully!" in console
4. If you see errors, share them for debugging

### "Username Already Exists" But It Doesn't

**Cause**: Case sensitivity or whitespace

**Solution**:
1. Try a completely different username
2. Check Firebase Database to see existing usernames
3. Usernames are stored in lowercase

### Can't See Admin Panel Link

**Cause**: User's `isAdmin` field is not `true`

**Solution**:
1. Go to Firebase Console → Realtime Database
2. Find your user under `/users/{uid}`
3. Make sure `isAdmin` is set to `true` (boolean, not string)

---

## ✅ Verification Checklist

After setup, verify these work:

- [ ] Can login with email
- [ ] Can login with username
- [ ] Can see "Admin Panel" link in navigation
- [ ] Can access Admin Panel page
- [ ] Can see "Add New Employee" button
- [ ] Can open the Add Employee modal
- [ ] Can submit the form
- [ ] See success message after submission
- [ ] New employee appears in database
- [ ] Can logout and login as new employee

---

## 📊 Expected Database Structure

After setup, your database should look like this:

```
skts-attendance-portal (root)
├── users
│   ├── xYz123AbC456 (your UID from Firebase Auth)
│   │   ├── name: "Firoz"
│   │   ├── username: "firoz"
│   │   ├── employeeId: "ADMIN001"
│   │   ├── email: "firozs@smartkrowtechnology.com"
│   │   ├── password: "your_password"
│   │   ├── isAdmin: true
│   │   └── createdAt: "2026-05-24T10:00:00.000Z"
│   └── (more employees added through UI)
└── attendance
    └── (attendance records)
```

---

## 🔐 Security Notes

1. **UID Must Match**: The key under `/users/` MUST be the same as the UID in Firebase Authentication
2. **Password Storage**: Currently plain text (not secure for production)
3. **Database Rules**: Keep them requiring authentication (`auth != null`)
4. **Admin Access**: Only users with `isAdmin: true` can access Admin Panel

---

## 📞 Still Having Issues?

If you're still having problems:

1. **Check Browser Console** (F12 → Console tab)
2. **Look for errors** (red text)
3. **Share the error messages** so I can help debug
4. **Verify you're logged in** (check if you see your name in header)
5. **Check Firebase Console** to see if data is being written

---

**Last Updated**: May 24, 2026
