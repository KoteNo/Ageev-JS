const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function compareStrings(a, b) {
    if (a === b) {
        console.log("Строки идентичны");
    } else {
        console.log("Строки неидентичны");
    }
}

readline.question('Введите первую строку (a): ', (a) => {
    readline.question('Введите вторую строку (b): ', (b) => {
        compareStrings(a, b);

        readline.close();
    });
});