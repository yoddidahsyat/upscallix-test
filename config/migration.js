const User = require('../model/User');
require('../model/PendingEmail')
const sequelize = require('./db')


sequelize.sync({force: true}).then(() => {
    console.log('All models were synchronized successfully!');
    createUsers()
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

const createUsers = async () => {
    console.log('creating users...')
    try {
        await User.bulkCreate([
            {
                "email": "test1@test.com",
                "firstName": "Yoddi",
                "lastName": "Dahsyat",
                "birthdayDate": "1998-11-20",
                "utc": 16,
                "location": "Asia/Jakarta"
            },
            {
                "email": "test2@test.com",
                "firstName": "Arif",
                "lastName": "Rahman",
                "birthdayDate": "1998-11-20",
                "utc": 16,
                "location": "Asia/Jakarta"
            },
            {
                "email": "test3@test.com",
                "firstName": "Wawan",
                "lastName": "Fajar",
                "birthdayDate": "1998-11-20",
                "utc": 16,
                "location": "Asia/Jakarta"
            },
            {
                "email": "test4@test.com",
                "firstName": "Bila",
                "lastName": "Ulin",
                "birthdayDate": "1998-11-20",
                "utc": 16,
                "location": "Asia/Jakarta"
            },
            {
                "email": "test5@test.com",
                "firstName": "Ara",
                "lastName": "Chan",
                "birthdayDate": "1998-11-20",
                "utc": 16,
                "location": "Asia/Jakarta"
            },
        ])
        console.log('Users created.')
    } catch (error) {
        console.log('Createbulk failed.')
        console.log({error})
    }
}