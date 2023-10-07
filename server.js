import app from './src/app.js'

import conexao from './infra/conexao.js'

const PORT = 3000;

conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    }else{
        console.log('SUCESSO AO CONECTAR...')
        app.listen(PORT, () => {
            console.log(`servidor rodando no endereço http://localhost:${PORT}`)
        })
        
    }
}) 


