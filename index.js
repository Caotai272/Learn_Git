app.post('/contacts', (req, res) => {
    const { name, phone } = req.body;
    if (!name || !phone) {
        return res.status(400).json({ error: 'Name and phone are required' });
    }
    const newContact = { id: contacts.length + 1, name, phone };
    contacts.push(newContact);
    res.status(201).json(newContact);
});