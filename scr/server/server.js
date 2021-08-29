
const app = express(); // executando a função do express dentro da tabela
const bodyParser = require ('body-parser'); // sistema de leitura do js 
const fs = require('fs');

app.use(bodyParser.urlencoded({extended:true}))