const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/dist/projeto-base'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/projeto-base/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
})