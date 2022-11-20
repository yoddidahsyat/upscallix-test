const { API } = require('../../config/api')
const { addPendingEmail, getPendingEmails, deletePendingEmail } = require('./pendingEmail')

const sendBirthdayEmail = async (user, pendingId = null) => {
    const data = {
        email: user.email,
        message: `Hi ${user.firstName} ${user.lastName}, it's your birthday.`
    }
    try {
        const response = await API.post('/send-email', data)
        if (response.status === 200) {
            console.log({response: response.data, message: 'Email sent successfully'})
            if (pendingId) deletePendingEmail(pendingId)
        }
    } catch (error) {
        console.log({
            status: error.response.status,
            message: error.message,
            userId: user.id
        })
        if (!pendingId) addPendingEmail(user.id)
    }
}

const sendAllPendingEmail = async () => {
    console.log('CHECKING PENDING EMAILS...')
    const pendingEmail = await getPendingEmails()
    if (pendingEmail.length > 0){
        pendingEmail.map(pending => {
            sendBirthdayEmail(pending.User, pending.id)
        })
        console.log('ALL PENDING EMAILS HAS BEEN SENT.')
        return ;
    }
    console.log('NO PENDING EMAILS IN QUEUE.')
}

module.exports = { sendBirthdayEmail, sendAllPendingEmail }