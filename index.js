const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser'); // Adicionando middleware bodyParser para analisar dados do corpo

app.use(bodyParser.urlencoded({ extended: true }));

// Dados fictícios para armazenar grupos e membros
let grupos = [];
 
// Configurando o diretório estático para arquivos como CSS e JavaScript
app.use(express.static(__dirname));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Adicionando rota para inicio.html
router.get('/inicio.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/inicio.html'));
});

// Rota para a página de criar grupos
router.get('/criar-grupos', function (req, res) {
    res.sendFile(path.join(__dirname + '/criar-grupos.html'));
});

// Rota para processar a criação de grupos
router.post('/criar-grupos', function (req, res) {
    const nomeGrupo = req.body.nomeGrupo;
    const membros = req.body.membros.split(','); // Os membros são fornecidos como uma string separada por vírgulas

    // Adicionando o grupo à lista de grupos
    grupos.push({ nomeGrupo, membros });

    res.redirect('/visualizar-grupos');
});

// Rota para visualizar os grupos criados
router.get('/visualizar-grupos', function (req, res) {
    res.send('Grupos Criados: ' + JSON.stringify(grupos));
});

 
app.use('/', router);
 
const ipAddress = '172.16.31.36'; //Endereço IP da máquina
const port = 3003;
 
app.listen(port, ipAddress, () => {
    console.log(`Servidor rodando em http://${ipAddress}:${port}`);
});

