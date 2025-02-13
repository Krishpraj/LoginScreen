
# Login Page with React, Tailwind CSS, Express, and SQL

This repository contains the source code for a simple login page built using **React**, **Tailwind CSS**, **Express**, and **SQL**. The application allows users to sign in using their credentials, with backend authentication handled by an Express server and SQL database for storing user data.

## Features
- **Frontend** built with React and Tailwind CSS.
  - Responsive and mobile-friendly design.
  - Form validation for login inputs.
  - Error handling for incorrect credentials.

- **Backend** powered by Express.js.
  - API for handling user authentication.
  - Integration with a SQL database (e.g., MySQL or PostgreSQL) to store and retrieve user data.
  - Secure authentication with password hashing (using bcrypt).

- **Database**: SQL database for storing user information, including usernames and hashed passwords.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for designing modern and responsive layouts.
- **Express**: Web framework for Node.js to handle backend routes and API requests.
- **SQL**: Relational database for storing user data (e.g., MySQL, PostgreSQL).
- **bcrypt**: Library for hashing passwords securely.
- **jsonwebtoken**: For creating and verifying JSON Web Tokens (JWT) for secure authentication.

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (v14 or higher)
- NPM or Yarn (package managers)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/login-page-react-express.git
cd login-page-react-express
```

### Step 2: Install Frontend Dependencies

Navigate to the `client` directory and install the React and Tailwind dependencies:

```bash
cd client
npm install
```

### Step 3: Install Backend Dependencies

Navigate to the `server` directory and install the Express and database dependencies:

```bash
cd server
npm install
```

### Step 4: Set Up the Database

- Create a SQL database (e.g., `login_app`).
- In the `server` directory, create a `.env` file and configure the database connection. Example:

```dotenv
DB_HOST=localhost
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=login_app
JWT_SECRET=your-secret-key
```

- Create a table in your SQL database for storing user data. Example schema:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

### Step 5: Run the Application

1. Start the backend server:

```bash
cd server
npm start
```

2. Start the frontend React app:

```bash
cd client
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000) for the frontend and [http://localhost:5000](http://localhost:5000) for the backend.

## Usage

- **Sign Up**: Create a new user by entering a username and password.
- **Login**: Use the login form to authenticate by entering your username and password.
- **Backend Authentication**: The backend verifies credentials, checks the SQL database, and returns a JSON Web Token (JWT) if successful.
- **Secure Routes**: Use the JWT to access secure routes on the backend.

## File Structure

```
├── client/                 # React frontend
│   ├── public/             # Public assets
│   ├── src/                # React components, hooks, and pages
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── package.json        # Frontend dependencies and scripts
│
├── server/                 # Express backend
│   ├── config/             # Database configuration
│   ├── routes/             # Authentication routes
│   ├── controllers/        # Logic for handling requests
│   ├── models/             # User model for SQL interaction
│   ├── server.js           # Entry point for the Express server
│   ├── package.json        # Backend dependencies and scripts
│
├── .env                    # Environment variables (for sensitive information like database credentials and JWT secret)
├── README.md               # Project documentation
```

## Security

- Passwords are hashed using bcrypt before being stored in the database.
- JWTs are used for authentication and authorization, ensuring that secure routes are only accessible by authenticated users.

## Acknowledgements

- **React**: https://reactjs.org/
- **Tailwind CSS**: https://tailwindcss.com/
- **Express**: https://expressjs.com/
- **bcrypt**: https://www.npmjs.com/package/bcrypt
- **jsonwebtoken**: https://www.npmjs.com/package/jsonwebtoken
```

---

Feel free to adapt it to your project structure and add any other details that might be specific to your setup. Would you like any further modifications?
