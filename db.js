const Sequelize = require('sequelize');
const dotEnv = require('dotenv');

dotEnv.config();

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: '5433',
  operatorsAliases: Sequelize.Op,
  logging: false
});

sequelize.authenticate().then(
  () => {
    console.log("Connected to DB");
  },

  (err) => {
    console.log(`Error: ${err}`);
  }
)

module.exports = sequelize;