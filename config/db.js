const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'upscallix',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// tes koneksi db
// const connect = async () => { 
//     try {
//         await sequelize.authenticate();
//         console.log('Database connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// connect()

module.exports = sequelize