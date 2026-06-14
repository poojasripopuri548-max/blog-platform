# Blog Platform

A full-stack blogging platform with user authentication, post management, and comment functionality. Built with Node.js, Express, MongoDB, and vanilla JavaScript.

## Features

- **User Authentication**
  - User registration with email and password
  - Secure login with JWT tokens
  - Password hashing with bcrypt

- **Blog Posts**
  - Create, edit, and delete posts
  - View all posts on the home page
  - Read individual posts with full content
  - Author attribution and timestamps

- **Comments**
  - Add comments to posts
  - Delete own comments
  - User attribution for comments

- **Professional UI**
  - Modern, responsive design
  - Clean and intuitive interface
  - Mobile-friendly layout

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with CSS variables
- **Vanilla JavaScript** - Functionality
- **Fetch API** - HTTP requests

## Project Structure

```
blog-platform/
├── backend/
│   ├── config/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── commentRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── auth.js
│   │   ├── posts.js
│   │   └── comments.js
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── post.html
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Backend Setup

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   The `.env` file is already configured with:
   ```
   MONGO_URI=mongodb://your_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
   
   Update the `MONGO_URI` with your MongoDB connection string if needed.

4. **Start the backend server**
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Serve the frontend**
   
   Since this is a static frontend, you can use any static file server. Options:
   
   **Using Python:**
   ```bash
   python -m http.server 3000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server -p 3000
   ```
   
   **Using VS Code Live Server extension:**
   - Right-click on `index.html`
   - Select "Open with Live Server"

   The frontend will run on `http://localhost:3000`

### Running the Application

1. Start the backend server (in one terminal):
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend server (in another terminal):
   ```bash
   cd frontend
   python -m http.server 3000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
  - Body: `{ name, email, password }`
  
- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
  - Returns: `{ token }`

### Posts

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post
- `POST /api/posts` - Create a new post (requires auth)
  - Headers: `Authorization: token`
  - Body: `{ title, content }`
- `PUT /api/posts/:id` - Update a post (requires auth, author only)
  - Headers: `Authorization: token`
  - Body: `{ title, content }`
- `DELETE /api/posts/:id` - Delete a post (requires auth, author only)
  - Headers: `Authorization: token`

### Comments

- `GET /api/comments/:postId` - Get all comments for a post
- `POST /api/comments/:postId` - Create a comment (requires auth)
  - Headers: `Authorization: token`
  - Body: `{ text }`
- `DELETE /api/comments/:id` - Delete a comment (requires auth, author only)
  - Headers: `Authorization: token`

## Usage Guide

1. **Register an Account**
   - Click "Register" on the home page
   - Fill in your name, email, and password
   - Submit the form

2. **Login**
   - Click "Login" on the home page
   - Enter your email and password
   - You'll be redirected to the dashboard

3. **Create a Post**
   - Go to the dashboard
   - Click "Create New Post"
   - Fill in the title and content
   - Click "Save Post"

4. **View Posts**
   - Home page shows all posts
   - Click "Read More" to view full post

5. **Add Comments**
   - View a post
   - Add a comment in the comment form
   - Only logged-in users can comment

6. **Edit/Delete Posts**
   - Go to the dashboard
   - Click "Edit" to modify a post
   - Click "Delete" to remove a post

7. **Delete Comments**
   - Only comment authors can delete their own comments
   - Click the "Delete" button on your comment

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Authorization checks for post/comment modifications
- CORS enabled for cross-origin requests
- Environment variables for sensitive data

## Development

### Adding New Features

1. **Backend**: Add new routes in the `routes/` directory
2. **Models**: Define new schemas in the `models/` directory
3. **Frontend**: Add new HTML pages and JavaScript files as needed
4. **Styling**: Modify `frontend/css/style.css`

### Testing the API

You can test the API endpoints using:
- Postman
- curl
- Browser DevTools

## Troubleshooting

### Backend won't start
- Ensure MongoDB is running
- Check that the `.env` file has correct values
- Verify port 5000 is not in use

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check CORS configuration
- Verify API_URL in JavaScript files matches backend URL

### Authentication issues
- Clear browser localStorage
- Verify JWT_SECRET in `.env`
- Check token expiration (7 days)

## License

ISC

## Author

Blog Platform - Full-Stack Development Project
