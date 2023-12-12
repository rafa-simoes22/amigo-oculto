const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
 
// Configurando o diretório estático para arquivos como CSS e JavaScript
app.use(express.static(__dirname));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Adicionando rota para inicio.html
router.get('/inicio.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/inicio.html'));
});
 
app.use('/', router);
 
const ipAddress = '172.16.31.36'; //Endereço IP da máquina
const port = 3003;
 
app.listen(port, ipAddress, () => {
    console.log(`Servidor rodando em http://${ipAddress}:${port}`);
});