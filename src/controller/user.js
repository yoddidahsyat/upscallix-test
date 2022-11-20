const User = require('../../model/User')
const Joi = require('joi')
const moment = require('moment')

const getUser = async (req, res) => {
    try {
        const user = await User.findAll()
        
        if (user.length === 0) {
            res.send({
                status: 'SUCCESS',
                message: 'User is empty',
                data: {
                    user: []
                }
            })
        }

        res.send({
            status: 'SUCCESS',
            message: 'Get users success',
            data: {
                user
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'FAILED',
            message: 'Cannot get user',
            error
        })
    }
}

const addUser = async (req, res) => {
    const data = {
        email: req.body.email,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        birthdayDate: req.body.birthday_date,
        location: req.body.location,
    }
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2}),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        birthdayDate: Joi.date().required(),
        location: Joi.string().required(),
    })

    try {
        const isExist = await User.findOne({
            where: {
                email: data.email
            }
        })
        if (isExist !== null) {
            return res.status(400).send({
                status: 'FAILED',
                message: 'Email is already existed',
            })
        }
        await schema.validateAsync(data)
        data.utc = moment.utc().hour(9).tz(data.location).format('H')
        // console.log(data)
        const user = await User.create(data)
        res.status(201).send({
            status: 'SUCCESS',
            message: 'User succesfully added!',
            data: {
                user
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'FAILED',
            message: 'Cannot add user',
            error: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findOne({
            where: {
                id
            }
        })
        // console.log(user)
        if (user === null) {
            return res.status(404).send({
                status: 'FAILED',
                message: 'User not found',
            })
        }
        await User.destroy({
            where: {
                id
            }
        });
        res.send({
            status: 'SUCCESS',
            message: 'User succesfully deleted!',
            data: {
                user
            }
        })
    } catch (error) {
        res.status(500).send({
            status: 'FAILED',
            message: 'Cannot delete user',
            error: error.message
        })
    }
}

module.exports = { getUser, addUser, deleteUser }