# Smart Krow Attendance Portal

A zero-cost employee attendance management system built for internal use, hosted on GitHub Pages with Firebase backend.

## 🎯 Features

- **Employee Dashboard**: View personal attendance history and statistics
- **Monthly Attendance Form**: Mark attendance for entire month at once
- **Admin Panel**: View all employees' attendance, filter by employee/month, export to CSV
- **Automated Reminders**: GitHub Actions sends email reminders before month-end
- **Role-Based Access**: Separate views for employees and administrators
- **Smart Krow Theme**: Matches official company branding

## 🚀 Tech Stack

- **Frontend**: React.js + Vite
- **Styling**: Custom CSS matching Smart Krow theme
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore (Free tier)
- **Hosting**: GitHub Pages (Free)
- **Automation**: GitHub Actions (Free)

## 📦 Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/YOUR_USERNAME/attendance-portal.git
cd attendance-portal
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Enable **Authentication** > Email/Password
4. Enable **Firestore Database** > Start in production mode
5. Copy your Firebase config from Project Settings
6. Update `src/firebase/config.js` with your credentials

### 3. Firestore Security Rules

Add these rules in Firebase Console > Firestore > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId || 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    
    // Attendance collection
    match /attendance/{attendanceId} {
      allow read: if request.auth != null && 
                    (resource.data.employeeId == request.auth.uid || 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true);
      allow create: if request.auth != null && request.resource.data.employeeId == request.auth.uid;
      allow update, delete: if request.auth != null && 
                              get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
  }
}
```

### 4. Create Initial Users

In Firebase Console > Firestore, create users manually:

**Collection: `users`**

Admin user:
```json
{
  "email": "admin@smartkrow.com",
  "name": "Admin User",
  "employeeId": "ADMIN001",
  "isAdmin": true
}
```

Employee users (repeat for all 15 employees):
```json
{
  "email": "employee1@smartkrow.com",
  "name": "Employee Name",
  "employeeId": "EMP001",
  "isAdmin": false
}
```

Then create accounts in Firebase Authentication for each email.

### 5. GitHub Pages Deployment

1. Push code to GitHub
2. Go to repository Settings > Pages
3. Source: GitHub Actions
4. The workflow will auto-deploy on push to main

### 6. Email Reminder Setup (Optional)

1. Create a Gmail account for the system
2. Enable 2FA and create an App Password
3. Add secrets in GitHub repo Settings > Secrets:
   - `EMAIL_USERNAME`: your-email@gmail.com
   - `EMAIL_PASSWORD`: your-app-password
   - `EMPLOYEE_EMAILS`: comma-separated list of employee emails

## 📱 Usage

### For Employees:
1. Login with credentials
2. View dashboard with attendance stats
3. Click "Mark Attendance" to fill monthly form
4. Submit before month-end deadline

### For Admins:
1. Login with admin credentials
2. Access "Admin Panel"
3. Filter by employee/month
4. Export data to CSV for records

## 🎨 Customization

The theme matches Smart Krow branding:
- Primary Color: `#2BBECB` (Turquoise)
- Logo and styling in `src/components/Header.jsx`
- Modify colors in `src/index.css` `:root` variables

## 💰 Cost Breakdown

- **Hosting**: $0 (GitHub Pages)
- **Database**: $0 (Firebase Free tier - 50K reads/day, 20K writes/day)
- **Authentication**: $0 (Firebase Free tier)
- **CI/CD**: $0 (GitHub Actions - 2000 min/month free)
- **Total**: $0/month

## 📊 Firebase Free Tier Limits

- 50,000 document reads/day
- 20,000 document writes/day
- 1 GB storage
- 10 GB/month bandwidth

For 15 employees × 30 days = ~450 writes/month (well within limits)

## 🔒 Security

- Firebase Authentication for secure login
- Firestore security rules prevent unauthorized access
- Employees can only see their own data
- Admins have full read access
- HTTPS enforced via GitHub Pages

## 📝 License

Internal use only - Smart Krow Technology Solutions

## 🤝 Support

Contact your system administrator for access issues or technical support.
