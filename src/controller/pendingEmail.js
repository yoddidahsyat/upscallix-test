const PendingEmail = require('../../model/PendingEmail')
const User = require('../../model/User')

const getPendingEmails = async () => {
    try {
        const pendingEmails = await PendingEmail.findAll({include: User})
        return (pendingEmails)
        
    } catch (error) {
        console.log({error: error.message, message: 'Cannot get pending emails'})
        return false
    }
}

const addPendingEmail = async (userId) => {
    console.log('adding PendingEmail...')
    // console.log({UserId})
    try {
        await PendingEmail.create({UserId: userId})
    } catch (error) {
        console.log({message: 'Failed to create pending email record', error: error.message})
        setTimeout(addPendingEmail(userId), 5000)
    }
}

const deletePendingEmail = async (id) => {
    try {
        await PendingEmail.destroy({
            where: {
                id
            }
        })
        console.log('pending email queue succesfully deleted.')
    } catch (error) {
        console.log({message: 'Failed to delete pending email record', error: error.message})
        setTimeout(deletePendingEmail(id), 5000)
    }
}

module.exports = { addPendingEmail, deletePendingEmail, getPendingEmails }