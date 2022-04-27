const config = require('config')
const customExpress = require('../config/customExpress')
const app = customExpress()
const conexao = require('./infraestrutura/index')
const tabelas =  require('./infraestrutura/tabelas')

conexao
  .authenticate()
  .then(() => {
    console.log('\nConnection has been established successfully.\n')
    tabelas.init(conexao)
    app.listen(config.get('api.porta'), () => console.log("API está funcionando!!!"))
  })
  .catch(err => {
    console.error('\nUnable to connect to the database:', err)
  })

