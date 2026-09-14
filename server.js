// server.js

const express = require('express');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views');

// Temporary storage
let users = [];
// ===== REST API ENDPOINTS =====

// GET all sessions as JSON
app.get('/api/sessions', (req, res) => {
  res.json({ success: true, count: users.length, data: users });
});

// GET single session by id
app.get('/api/sessions/:id', (req, res) => {
  const session = users.find(u => u.id === parseInt(req.params.id));
  if (!session) return res.status(404).json({ success: false, message: 'Session not found' });
  res.json({ success: true, data: session });
});

// POST create new session via API
app.post('/api/sessions', (req, res) => {
  const { studentName, subject, hours, stress } = req.body;
  if (!studentName || !subject || !hours || !stress) {
    return res.status(400).json({ success: false, message: 'All fields required' });
  }
  const newSession = { id: users.length + 1, studentName, subject, hours, stress };
  users.push(newSession);
  res.status(201).json({ success: true, data: newSession });
});

// DELETE session by id
app.delete('/api/sessions/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'Session not found' });
  const deleted = users.splice(index, 1);
  res.json({ success: true, data: deleted[0] });
});
// GET /dashboard → API-powered frontend page
app.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});
// Home page
app.get('/', (req, res) => {

res.render('index', {
title: 'Study Tracker',
message: null,
error: null
});

});

// Handle form submission
app.post('/submit-study-data', (req, res) => {

const { studentName, subject, hours, stress } = req.body;

// Server-side validation
const errors = [];

if (!studentName || studentName.trim().length < 2) {
errors.push('Invalid name');
}

if (!subject || subject.trim().length < 2) {
errors.push('Invalid subject');
}

if (!hours || hours < 0 || hours > 24) {
errors.push('Invalid hours');
}

if (!stress || stress < 1 || stress > 10) {
errors.push('Invalid stress level');
}

// If validation fails
if (errors.length > 0) {

```
return res.render('index', {
  title: 'Study Tracker',
  message: null,
  error: errors.join(', ')
});
```

}

// Create new entry
const newUser = {
id: users.length + 1,
studentName,
subject,
hours,
stress
};

// Save data
users.push(newUser);

// Redirect
res.redirect('/success?name=' + encodeURIComponent(studentName));

});


// Show all entries
app.get('/users', (req, res) => {

res.render('users', {
title: 'All Entries',
users: users
});

});

// Success page
app.get('/success', (req, res) => {

const name = req.query.name || 'Student';

res.render('success', {
title: 'Success',
name
});

});

// Start server
app.listen(PORT, () => {

console.log(`Server running at http://localhost:${PORT}`);
console.log('Press Ctrl+C to stop');

});

