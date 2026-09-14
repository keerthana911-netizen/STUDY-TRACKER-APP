# Cognifyz Full Stack Internship — Task 1

## What This Does
A Node.js + Express web app with server-side rendering using EJS.
Users can register via a form, data is validated server-side, and stored in memory.

## Tech Stack
- **Node.js** — JavaScript runtime
- **Express** — web framework
- **EJS** — templating engine for server-side rendered HTML

## Project Structure
```
cognifyz-app/
├── server.js          ← main server (routes, middleware, logic)
├── package.json       ← dependencies
├── views/
│   ├── index.ejs      ← registration form page
│   ├── success.ejs    ← success confirmation page
│   └── users.ejs      ← displays all registered users
└── public/
    └── css/
        └── style.css  ← all styles
```

## How to Run
```bash
npm install       # install dependencies
npm start         # start server at http://localhost:3000
```

Or for development (auto-restart on save):
```bash
npm run dev
```

## Routes
| Method | Path        | What it does                         |
|--------|-------------|--------------------------------------|
| GET    | /           | Shows the registration form          |
| POST   | /register   | Handles form submission + validation |
| GET    | /users      | Lists all registered users           |
| GET    | /success    | Shows success page after registering |

## Task 1 Requirements Covered
- ✅ HTML structure with forms for user input
- ✅ Node.js server using Express
- ✅ Server-side endpoints to handle form submissions
- ✅ Server-side rendering using EJS
