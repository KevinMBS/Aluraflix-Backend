const modeloVideo = require('../modelos/modeloVideo')

class Tabelas{
    init(conexao){
        this.conexao = conexao       
        this.criarVideos()
        console.log("\nTabelas criadas com sucesso!!\n")
    }

    async criarVideos(){
        //faltando verficar erro em conexao
        await this.conexao.sync()
    }
}

module.exports = new Tabelas