const Sequelize = require('sequelize')
const database = require('../infraestrutura/index')

const modeloVideo = database.define('video', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: true
    },
    url: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false
    }
 
})

module.exports = modeloVideo