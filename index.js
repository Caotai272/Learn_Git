const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let contacts = [];

app.get('/contacts', (req, res) => {
    res.json(contacts);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});