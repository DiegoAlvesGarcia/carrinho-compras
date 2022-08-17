const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/dist/carrinho-compras'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/carrinho-compras/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
})