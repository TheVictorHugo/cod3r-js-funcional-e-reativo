const fs = require('fs')

function lerDiretorios(caminho){
    let arquivos = fs.readdirSync(caminho)
    console.log(arquivos)
}

module.exports = {
    lerDiretorios
}