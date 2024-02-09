const fs = require('fs');

console.log('Inicio');

fs.writeFile('arquivo.txt', "Ola", function (err) {
    setTimeout(function() {
        console.log("Criado");
    }, 1000);
})

console.log('Fim');