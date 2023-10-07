import e from 'express';
import express from 'express';
const app = express();

app.use(express.json()) 

const selecoes = [
    {id:1 , selecao: 'holanda' , grupo:'A'},
    {id:2 , selecao: 'brazil' , grupo:'A'},
    {id:3 , selecao: 'argentina' , grupo:'A'},
    {id:4 , selecao: 'mexico' , grupo:'A'},
]

function buscarSelecaoPorId(id){
    return selecoes.filter(selec => selec.id == id)
}

function buscarIndexSelecao(id){
    return selecoes.findIndex( selec => selec.id == id)
}

app.delete('/selecoes/:id', (req , res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index,1)
    res.send(`selecao com id ${req.params.id} excluida com sucesso`)
} )

app.put('/selecoes/:id', (req , res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
} )


app.get('/', (req , res) => {
    res.send('LOREM MUDOU TESTE ')
})

app.get('/selecoes', (req , res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req , res) => {
  //  let index = req.params.id
    res.json(buscarSelecaoPorId(req.params.id))
}) 

app.post('/selecoes', (req , res) => {
    selecoes.push(req.body)
    res.status(201).send('SELECAO CADASTRADA COM SUCESSO')
} )









export default app