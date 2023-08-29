const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`postgres://postgres:${process.env.PASSWORD}@${process.env.HOSTPROD}:5432/${process.env.DATABASE}`,{
dialect: 'postgres'
})

module.exports = sequelize;
