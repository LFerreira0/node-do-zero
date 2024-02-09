

//externo
const minimist = require('minimist')

//interno
const args = minimist(process.argv.slice(2))

const soma = require('./soma').soma

const num1 = parseInt(args["num1"])

const num2 = parseInt(args["num2"])

soma(num1,num2)