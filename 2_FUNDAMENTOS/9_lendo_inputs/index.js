const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua linguagem preferida ? ", (language) =>{
    if(language === "JS"){
        console.log("God");
    }else{
        console.log(`Sua linguagem favorita é ${language}`);

    }
    readline.close()
})