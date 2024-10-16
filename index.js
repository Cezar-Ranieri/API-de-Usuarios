const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const usuarioSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    idade: Number
    },{ versionKey: false })

const Usuario = mongoose.model('Usuario', usuarioSchema)

app.get('/', async (req, res) => {
    const query = await Usuario.find()
    res.send(query)
})

app.post('/', async (req, res) => {
    const novoUsuario = new Usuario({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade
    })
    await novoUsuario.save()
    res.send(novoUsuario)
})

app.delete('/:id', async (req, res) => {
    res.send(await Usuario.findByIdAndDelete(req.params.id))
})

app.put('/:id', async (req, res) => {
    res.send(await Usuario.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade
    }))
})

app.listen(3000, () => {
    mongoose.connect(DATABASE_URL)
    console.log('server funcionado')
})