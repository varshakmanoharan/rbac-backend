# Role-Based Access Control (RBAC) with JWT Authentication

This project demonstrates a basic implementation of Role-Based Access Control (RBAC) with JWT authentication in a Node.js application using Express and MongoDB.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install

    Create a .env file with the following content:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Start the application:

    npm start

Routes

    POST /api/auth/register: Register a new user.
    POST /api/auth/login: Login and receive a JWT token.
    GET /api/protected: Protected route, accessible only by users with specific roles (admin, moderator).


### Running the Project:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your `.env` file for MongoDB and JWT_SECRET.
4. Run the server using `npm start`.

This structure should get you started with a basic RBAC implementation in Node.js with JWT-based au