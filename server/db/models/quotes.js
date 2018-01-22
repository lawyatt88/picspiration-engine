const Sequelize = require('sequelize')
const db = require('../db')

const Quote = db.define('quote', {
  body:  {
    type: Sequelize.TEXT,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING,
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
})


module.exports = Quote

