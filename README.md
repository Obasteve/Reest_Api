
Project overview

Setup instructions

API endpoints

Postman test guide

Expected responses

Example payloads

# 🧑‍💻 Reest API – RESTful User Management with Express.js

This is a simple RESTful API built using **Node.js** and **Express.js** for managing users. The application uses an **in-memory data store** (JavaScript array) to simulate a database and performs full **CRUD** operations (Create, Read, Update, Delete) on user records.

## 🚀 Features

- Full CRUD (Create, Read, Update, Delete) functionality
- In-memory data storage using JavaScript arrays
- Modular structure using MVC (Model-View-Controller) pattern
- Testable via Postman or cURL
- Lightweight and easy to extend

---

## 📁 Project Structure

Reest_Api/
│
├── controllers/
│ └── user.js # Business logic (CRUD)
│
├── routes/
│ └── users.js # RESTful route definitions
│
├── index.js # Main application entry point
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

npm run dev
The server should be running at:
👉 http://localhost:5000

📫 API Endpoints
All endpoints are prefixed with /users:

Method	Endpoint	Description
GET	/users	Get all users
GET	/users/:id	Get a user by ID
POST	/users	Create a new user
PATCH	/users/:id	Update an existing user
DELETE	/users/:id	Delete a user by ID

🔬 Sample User Object
json
Copy
Edit
{
  "firstName": "Jane",
  "lastName": "Doe",
  "description": "new user"
}
🧪 Postman Test Guide
✅ 1. GET /users
Purpose: Fetch all users

Request: No body

Response: 200 OK

json
Copy
Edit
[
  {
    "id": "uuid-1",
    "firstName": "Jane",
    "lastName": "Doe",
    "description": "new user"
  }
]
✅ 2. POST /users
Purpose: Create a new user

Request Body:

json
Copy
Edit
{
  "firstName": "John",
  "lastName": "Smith",
  "description": "new user"
}
Response: 201 Created

json
Copy
Edit


✅ 3. GET /users/:id
Purpose: Get a specific user by ID

Path Param: Replace :id with the actual user ID

Response: 200 OK (if found)

json
Copy
Edit
{
  "id": "uuid-1",
  "firstName": "John",
  "lastName": "Smith",
  "description": "new user" 
}
404 Not Found (if ID is invalid)

✅ 4. PATCH /users/:id
Purpose: Update user details (partial updates allowed)

Request Body:

json
Copy
Edit
{
  "description": "super user"
}
Response: 200 OK

json
Copy
Edit
{
  "message": "User updated",
  "user": {
    "id": "uuid-1",
    "firstName": "John",
    "lastName": "Smith",
    "age": 32
  }
}
✅ 5. DELETE /users/:id
Purpose: Delete a user

Response: 200 OK

json
Copy
Edit
{
  "message": "User deleted successfully"
}
❗ Common Errors
Error	Cause
404 Route not found	Accessing invalid URL like /user instead of /users
User not found	Invalid or missing user ID in GET, PATCH, or DELETE
Cannot POST /	Using / instead of /users in POST request
Invalid character in header	Incorrectly copied URL or newline characters in Postman

📦 Dependencies
express: Web framework

uuid: Unique ID generator

