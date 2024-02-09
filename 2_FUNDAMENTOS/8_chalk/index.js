const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    {name: 'nome', message: 'Qual seu nome ?'},
    {name: 'idade', message: 'Qual sua idade ? '}
])
.then((answers) => {
    if(!answers.Nome){
        throw new Error("O valor nome é obrigatório!")
    }
    if(!answers.Idade){
        throw new Error("O valor idade é obrigatório!")
    }

    const response = `O nome do usuário é ${nome} e sua idade é ${idade}`
    console.log(chalk.bgYellow.black(response));
})

