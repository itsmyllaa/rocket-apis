const express = require('express')

const app = express()

app.listen('3000')

app.route('/:identificador').post((req,res) => {
    res.send(req.params.identificador)
})