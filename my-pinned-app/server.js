const express = require('express');

const app = express();
const port = 5000;

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, name: "Cheryl St. Pierre"}
    ];
    res.json(users);
})

app.listen(port, () => console.log(`Server started on port ${port}`));