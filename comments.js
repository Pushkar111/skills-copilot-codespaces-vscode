// Create web server
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.json())

// Create a new comment
app.post('/comments', (req, res) => {
    // Get the content of the comments.json file
    let comments = JSON.parse(fs.readFileSync('comments.json'))
    // Create a new comment
    comments.push(req.body)
    // Write the new comments to the comments.json file
    fs.writeFileSync('comments.json', JSON.stringify(comments))
    // Send a response
    res.send('Comment added')
})

// Get all comments
app.get('/comments', (req, res) => {
    // Get the content of the comments.json file
    let comments = JSON.parse(fs.readFileSync('comments.json'))
    // Send the comments as response
    res.send(comments)
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})