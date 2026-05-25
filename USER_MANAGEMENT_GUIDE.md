# User Management Guide

## 🎉 New Features Added

### 1. **Add Employee Feature in Admin Panel**
Admins can now add new employees directly from the Admin Panel without needing to access Firebase Console.

### 2. **Username-Based Login**
Users can now login using either their **username** or **email address**, making it more convenient.

---

## 📋 How to Add New Employees

### Step 1: Login as Admin
- Go to: https://firozskts.github.io/attendance-portal/
- Login with your admin credentials

### Step 2: Access Admin Panel
- Click on **"Admin Panel"** in the navigation menu
- You should see the admin dashboard with attendance statistics

### Step 3: Add New Employee
1. Click the **"➕ Add New Employee"** button at the top
2. Fill in the required details:
   - **Full Name**: Employee's complete name (e.g., "John Doe")
   - **Username**: Unique username for login (e.g., "john.doe")
     - Can only contain letters, numbers, dots, underscores, and hyphens
     - Will be converted to lowercase automatically
   - **Employee ID**: Unique employee identifier (e.g., "EMP002")
   - **Email**: Employee's email address
   - **Password**: Initial password (minimum 6 characters)
   - **Admin User**: Check this box if the user should have admin access

3. Click **"Add Employee"** button
4. You'll see a success message when the employee is added
5. The modal will close automatically after 2 seconds

### Step 4: Share Credentials
- Send the username/email and password to the new employee
- They can login immediately using either their username or email

---

## 🔐 Login Options

Users can now login using **either**:

### Option 1: Username Login
```
Username: john.doe
Password: ********
```

### Option 2: Email Login
```
Email: john@smartkrowtechnology.com
Password: ********
```

Both methods work seamlessly!

---

## 👥 User Types

### Regular Employee
- Can mark their own attendance
- Can view their attendance history on Dashboard
- Cannot access Admin Panel

### Admin User
- All employee permissions
- Can access Admin Panel
- Can view all employees' attendance records
- Can add new employees
- Can export attendance data to CSV

---

## 🔧 Technical Details

### Database Structure

**Users Collection** (`/users/{userId}`):
```json
{
  "name": "John Doe",
  "username": "john.doe",
  "employeeId": "EMP002",
  "email": "john@smartkrowtechnology.com",
  "password": "hashed_password",
  "isAdmin": false,
  "createdAt": "2026-05-24T10:30:00.000Z"
}
```

### Validation Rules
- **Username**: Must be unique, alphanumeric with dots/underscores/hyphens
- **Employee ID**: Must be unique
- **Password**: Minimum 6 characters
- **Email**: Must be valid email format

---

## 🚨 Important Notes

### Security Considerations
1. **Passwords are stored in plain text** in the current implementation
   - For production use, implement proper password hashing (bcrypt, etc.)
   - Consider using Firebase Authentication for better security

2. **Admin Access**: Only users with `isAdmin: true` can:
   - Access the Admin Panel
   - Add new employees
   - View all attendance records

3. **Username Case Sensitivity**: Usernames are stored and compared in lowercase

### Best Practices
1. **Strong Passwords**: Encourage employees to use strong passwords
2. **Unique Usernames**: Use a consistent naming convention (e.g., firstname.lastname)
3. **Employee IDs**: Use a sequential format (EMP001, EMP002, etc.)
4. **Regular Backups**: Export attendance data regularly using the CSV export feature

---

## 🐛 Troubleshooting

### "Username already exists"
- Choose a different username
- Check if the employee was already added

### "Employee ID already exists"
- Use a different Employee ID
- Check the employee list in Admin Panel

### "Failed to add employee"
- Check your internet connection
- Verify Firebase database permissions
- Check browser console for detailed errors

### Login Issues
- Verify username/email is correct (usernames are case-insensitive)
- Check password is correct
- Ensure the user was successfully added to the database

---

## 📊 Features Summary

| Feature | Description | Access Level |
|---------|-------------|--------------|
| Add Employee | Add new employees with username/email | Admin Only |
| Username Login | Login with username instead of email | All Users |
| Email Login | Traditional email-based login | All Users |
| View All Attendance | See all employees' records | Admin Only |
| Export to CSV | Download attendance reports | Admin Only |
| Mark Attendance | Submit leave/attendance records | All Users |
| View Dashboard | Personal attendance statistics | All Users |

---

## 🔄 Future Enhancements

Potential improvements for the system:
1. Password hashing for security
2. Password reset functionality
3. Edit employee details
4. Delete/deactivate employees
5. Bulk employee import (CSV)
6. Email notifications for new accounts
7. Two-factor authentication
8. Role-based permissions (beyond admin/employee)

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the browser console for error messages
3. Contact your system administrator

---

**Last Updated**: May 24, 2026
**Version**: 2.0.0
