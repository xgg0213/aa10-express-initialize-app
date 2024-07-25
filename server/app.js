const express = require('express');

// Create the Express app.
const app = express();

app.get('/status', (req, res) => {
    res.send('the server is live real-time!')
})
// Create port
const port = 5001;
app.listen(port, () => console.log(`Server is listening on port ${port}.`));

