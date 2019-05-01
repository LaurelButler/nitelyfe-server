// const app = require('./app')

// const { PORT } = require('./config')

// app.listen(PORT, () => {
//     console.log(`Server listening at http://localhost:${PORT}`)
// })
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/api/events', (req, res) => {
    res.json([
        {
            name: 'A Cool Bar',
            deal: 'Half off drinks',
            day: 'Tuesday'
        }
    ])
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = { app };