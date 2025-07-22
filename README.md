
RESTful User Management API
A simple RESTful API built with Node.js and Express.js for managing users with full CRUD (Create, Read, Update, Delete) functionality. This API uses an in-memory data store for demonstration purposes.

Project Structure
project/
├── index.js              # Main application entry point
├── controllers/
│   └── user.js          # User controller with CRUD logic
├── routes/
│   └── users.js         # User route definitions
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
Features
✅ Full CRUD operations for user management
✅ RESTful API design with proper HTTP methods
✅ Input validation and error handling
✅ In-memory data storage
✅ JSON response format
✅ Modular code structure
Installation & Setup
Clone the repository:
bash
git clone <your-repo-url>
cd <project-folder>
Install dependencies:
bash
npm install
Start the development server:
bash
npm run dev
Start the production server:
bash
npm start
The server will run on http://localhost:5000

Dependencies
express: Web framework for Node.js
uuid: For generating unique user IDs
nodemon: Development dependency for auto-reloading
API Endpoints
Base URL
http://localhost:5000
User Endpoints
Method	Endpoint	Description
GET	/users	Get all users
GET	/users/:id	Get user by ID
POST	/users	Create new user
PUT	/users/:id	Update user by ID
DELETE	/users/:id	Delete user by ID
API Examples
1. Get All Users
Request:

bash
GET http://localhost:5000/users
Response:

json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "firstName": "John",
      "lastName": "Doe",
      "description": "Software Developer"
    },
    {
      "id": "987fcdeb-51a2-43d1-9c42-123456789abc",
      "firstName": "Jane",
      "lastName": "Smith",
      "description": "UI/UX Designer"
    }
  ]
}
2. Get User by ID
Request:

bash
GET http://localhost:5000/users/123e4567-e89b-12d3-a456-426614174000
Response (Success):

json
{
  "success": true,
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "firstName": "John",
    "lastName": "Doe",
    "description": "Software Developer"
  }
}
Response (Not Found):

json
{
  "success": false,
  "message": "User with ID 123e4567-e89b-12d3-a456-426614174000 not found"
}
3. Create New User
Request:

bash
POST http://localhost:5000/users
Content-Type: application/json

{
  "firstName": "Alice",
  "lastName": "Johnson",
  "description": "Data Scientist"
}
Response (Success):

json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "456e7890-e12b-34d5-a678-901234567890",
    "firstName": "Alice",
    "lastName": "Johnson",
    "description": "Data Scientist"
  }
}
Response (Validation Error):

json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "firstName is required",
    "description is required"
  ]
}
4. Update User
Request:

bash
PUT http://localhost:5000/users/123e4567-e89b-12d3-a456-426614174000
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "description": "Senior Software Developer"
}
Response:

json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "firstName": "John",
    "lastName": "Doe",
    "description": "Senior Software Developer"
  }
}
5. Delete User
Request:

bash
DELETE http://localhost:5000/users/123e4567-e89b-12d3-a456-426614174000
Response:

json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "firstName": "John",
    "lastName": "Doe",
    "description": "Senior Software Developer"
  }
}
Testing with Postman
Step-by-Step Postman Testing Process:
Setup Postman Collection:
Create a new collection named "User API Tests"
Set base URL as {{baseUrl}} variable with value http://localhost:5000
Test GET All Users:
Method: GET
URL: {{baseUrl}}/users
Expected: 200 status with users array
Test CREATE User:
Method: POST
URL: {{baseUrl}}/users
Headers: Content-Type: application/json
Body (raw JSON):
json
{
  "firstName": "Test",
  "lastName": "User",
  "description": "Test Description"
}
Expected: 201 status with created user
Test GET User by ID:
Method: GET
URL: {{baseUrl}}/users/{{userId}} (use ID from create response)
Expected: 200 status with user data
Test UPDATE User:
Method: PUT
URL: {{baseUrl}}/users/{{userId}}
Headers: Content-Type: application/json
Body: Updated user data
Expected: 200 status with updated user
Test DELETE User:
Method: DELETE
URL: {{baseUrl}}/users/{{userId}}
Expected: 200 status with deleted user data
Testing with cURL
bash
# Get all users
curl -X GET http://localhost:5000/users

# Create user
curl -X POST http://localhost:5000/users \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","description":"Test Description"}'

# Get user by ID
curl -X GET http://localhost:5000/users/{USER_ID}

# Update user
curl -X PUT http://localhost:5000/users/{USER_ID} \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Updated","lastName":"User","description":"Updated Description"}'

# Delete user
curl -X DELETE http://localhost:5000/users/{USER_ID}
Error Handling
The API handles various error scenarios:

400 Bad Request: Invalid input data or validation errors
404 Not Found: User with specified ID doesn't exist
500 Internal Server Error: Server-side errors
Data Validation
All user operations validate the following fields:

firstName: Required, non-empty string
lastName: Required, non-empty string
description: Required, non-empty string
Development Notes
This API uses an in-memory data store, so data will be lost when the server restarts
For production use, consider implementing a persistent database
All user IDs are generated using UUID v4 for uniqueness
Input data is trimmed to remove leading/trailing whitespace
Contributing
Fork the repository
Create your feature branch
Commit your changes
Push to the branch
Create a Pull Request
