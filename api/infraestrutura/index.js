const Sequelize = require('sequelize')
const config = require('config')

const instacia = new Sequelize(
    config.get('db.banco-de-dados'),
    config.get('db.usuario'),
    config.get('db.senha'),
    {
        host: config.get('db.host'),
        dialect: config.get('db.dialect'),
        port: config.get('db.port')
    }
)

module.exports = instacia