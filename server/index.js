const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("index rodando")

})

app.listen(8080, ()=>console.log('porta 8080 servidor rodando...'))