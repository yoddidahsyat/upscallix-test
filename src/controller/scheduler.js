const cron = require('node-cron');
const moment = require('moment-timezone')
const User = require('../../model/User');
const sequelize = require('../../config/db');
const { Op } = require('sequelize')
const { sendBirthdayEmail, sendAllPendingEmail } = require('./sendBirthdayEmail');


// running cron job every hour
cron.schedule('0 0 * * * *', async () =>{
    sendAllPendingEmail()
    const now = moment.utc()
    try {
        const users = await User.findAll({
            where: {
                utc: now.format('H'),
                birthdayDate: sequelize.where(sequelize.fn('MONTH', sequelize.col('birthdayDate')), now.format('MM')),
                [Op.and]: sequelize.where(sequelize.fn('DAY', sequelize.col('birthdayDate')), now.format('DD')),
            }
        })
        users.map(user => {
            sendBirthdayEmail(user)
        })
    } catch (error) {
        console.log(error)
    }
})