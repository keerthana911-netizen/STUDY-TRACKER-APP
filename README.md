# ⚡ StudyTracker

A full-stack Node.js + Express web app for logging study sessions — subject, hours studied, and stress level — with both a styled server-rendered UI and a REST API.

🔗 **Live Demo:** _(add your Render URL here after deploying)_

---

## 📌 What This Does

Users log a study session (name, subject, hours studied, stress level 1–10) through a form. Entries are validated server-side, stored, and viewable on a sessions list and a dashboard page. The same data is also exposed through a REST API for programmatic access.

---

## 🛠️ Tech Stack

- **Node.js** — JavaScript runtime
- **Express** — web framework + REST API
- **EJS** — server-side templating for the UI
- **Bootstrap** — styling

---

## 📂 Project Structure

```
STUDY-TRACKER-APP/
├── server.js              ← routes, validation, REST API
├── package.json
├── views/
│   ├── index.ejs           ← study session form
│   ├── success.ejs         ← confirmation page
│   ├── users.ejs           ← list of all sessions
│   └── dashboard.ejs       ← dashboard view
└── public/
    └── css/
        └── style.css
```

---

## ⚙️ How to Run Locally

```bash
git clone https://github.com/keerthana911-netizen/STUDY-TRACKER-APP.git
cd STUDY-TRACKER-APP
npm install
npm start        # runs at http://localhost:5000
```

For auto-restart on save during development:
```bash
npm run dev
```

---

## 🌐 Routes

| Method | Path                  | What it does                              |
|--------|-----------------------|--------------------------------------------|
| GET    | `/`                    | Shows the study session form              |
| POST   | `/submit-study-data`   | Validates and saves a session, redirects  |
| GET    | `/users`               | Lists all logged sessions                 |
| GET    | `/success`             | Confirmation page after logging a session |
| GET    | `/dashboard`           | Dashboard view                            |

### REST API

| Method | Path                | What it does                    |
|--------|---------------------|----------------------------------|
| GET    | `/api/sessions`      | Returns all sessions as JSON    |
| GET    | `/api/sessions/:id`   | Returns a single session by ID  |
| POST   | `/api/sessions`       | Creates a session via JSON body |
| DELETE | `/api/sessions/:id`   | Deletes a session by ID         |

---

## ✅ Validation Rules

- Name and subject: minimum 2 characters
- Hours: between 0 and 24
- Stress level: between 1 and 10

Invalid submissions show an inline error message instead of proceeding.

---

## ⚠️ Known Limitations

- **In-memory storage only** — session data resets whenever the server restarts. A production version would use MongoDB or a similar persistent database.
- No authentication — anyone can view or submit sessions.

---

## 🎯 Learning Outcomes

- Built server-side form validation and error handling in Express
- Implemented both a traditional server-rendered UI (EJS) and a parallel REST API for the same data
- Deployed a live full-stack app

---

## 👩‍💻 Author

Keerthana — BTech CSE, SRM Institute of Science and Technology
