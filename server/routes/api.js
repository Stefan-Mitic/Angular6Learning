const express = require('express')
const jwt = require('jwt')
const router = express.Router()
const User = require('../models/user')

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

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            cosole.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid Email')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid Password')
                } else {
                    res.status(200).send(user)
                }
            }
        }
    })
})

router.get('/events', (req, res) => {
    // Hard coded list of events
    // let event = []
    // res.json(events)
})

router.get('/special', (req, res) => {
    // Hard coded list of events
    // let event = []
    // res.json(events)
})

module.exports = router