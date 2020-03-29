

const express = require('express')
  , router = express.Router()
  , Comment = require('../models/user')

router.get('/:name', (req, res) => {
  Comment.get(req.params.name, (err, name) => {
    res.render('user/name', {name})
  })
})

module.exports = router

