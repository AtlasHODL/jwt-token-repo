require('dotenv').config()

const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

posts = [
    {
        username: 'Mateo',
        title: 'test1'
    }
    ,{
        username: 'Atlas',
        title: 'test2'
    }
]


app.get('/posts', (req, res) =>{
    res.json(posts)
})

app.post('/login', (req, res) =>{
    // Auth User

    const username = req.body.username
    const user = { name: username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

app.listen(3000)