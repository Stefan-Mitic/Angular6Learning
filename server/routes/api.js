const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = "mongodb://adminstefan:A123456@ds151127.mlab.com:51127/angular6"

mongoose.connect(db, err => {
    if (err) {
        console.log('Error!' + err)
    } else {
        console.log('Connected to mongodb')        
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
})

module.exports = router