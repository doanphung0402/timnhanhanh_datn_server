const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD || null, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    // dialectOptions: {
    //     ssl: {
    //         require: true, // This will help you. But you will see nwe error
    //         rejectUnauthorized: false // This line will fix new error
    //     }
    // },
});

const connectDatabase = async () => {
    try {
        console.log("🚀 ~ file: connectDatabase.js:5 ~ process.env.DB_PASSWORD:", process.env.DB_NAME)
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectDatabase