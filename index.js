const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let contacts = [];

app.get('/contacts', (req, res) => {
    res.json(contacts);
});

app.post('/contacts', (req, res) => {
    const { name, phone, email } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    const newContact = { id: contacts.length + 1, name, phone, email };
    contacts.push(newContact);
    res.status(201).json(newContact);
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});