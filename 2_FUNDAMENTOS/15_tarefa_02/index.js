import chalk from 'chalk'

const nota = 7;

if(nota >= 9 ){
    console.log(chalk.yellow.bold('Aprovado'));    
}else{
    console.log(chalk.bgRed('Reprovado'));    
}

