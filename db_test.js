// Development-oriented code for testing sequelize connection to database
import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}\\server\\config\\config.json`)[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Check if sequelize can establish a database connection properly
sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.')
  .catch(err => console.error('Unable to connect to the database:', err);
