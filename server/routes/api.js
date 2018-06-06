const express = require('express')
const bodyParser = require('body-parser')

router.get('/', (req, res) => {
    res.send('From API route')
})

module.exports = router