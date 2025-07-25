// Description: A simple Node.js server using Express.js
const express = require('express')

const app = express()
// Middleware to log requests

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Hello, World!'
  })
})
// Middleware to parse JSON bodies
app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
// Middleware to handle errors