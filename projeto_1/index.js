const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'dados', 'legendas');

fn.lerDiretorios(caminho);
