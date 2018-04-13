const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
const jsonParser = bodyParser.json();

app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/Register', (req, res) => {
    const users = {
        "name": "Cheryl",
        "email": "test@gmail.com",
        "username": "cherylstp",
        "password": "pass"
    }
    res.json(users);
})

app.post('/Register', jsonParser, (req, res) => {
    const users = {
        "name": req.body.name,
        "email": req.body.email,
        "username": req.body.username,
        "password": req.body.password
    }
    res.send(users);
})