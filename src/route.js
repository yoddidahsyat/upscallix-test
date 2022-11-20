const express = require('express')
const router = express.Router()

const { getUser, addUser, deleteUser } = require('./controller/user')
// const { createHappyBirthdaySchedule } = require('./controller/happyBirthday')


router.get('/', (req, res) => res.send('Hello World!'))

router.get('/users', getUser)
router.post('/user', addUser)
router.delete('/user/:id', deleteUser)

module.exports = router