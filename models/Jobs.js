const Sequelize = require('sequelize');
const db = require('../config/database');

const Jobs = db.define('jobs', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
});

Jobs.sync().then(() => {
  console.log('table created');
});
module.exports = Jobs;