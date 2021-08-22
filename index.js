const readlineSync = require('readline-sync');
const chalk = require('chalk');
const {Quiz} = require('enquirer');
console.log('       ====================================================================')
console.log(chalk.magenta(' -- Hello lucky guy, you have the opportunity to win cool prizes  are you ready? -- '))
console.log('       ====================================================================')


const obj = {
    name: '',
    wallet: 0,
    password: ''
}
if (readlineSync.keyInYN(chalk.green(' Try to Register? '))) {

    obj.name = readlineSync.question(chalk.gray.underline(' What your name?: ')),
        obj.wallet = readlineSync.question(chalk.gray.underline(' Account balance: ')),
        obj.password = readlineSync.question(chalk.gray.underline(' Your password?: '))


} else {
    console.log(chalk.red('Error: Fill in all empty fields!'));
}
if (obj.name.length === 0 || obj.password.length === 0 || obj.wallet.length === 0) {
    console.log(chalk.red('Error: Fill in all empty fields!'));

} else {

    console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${obj.wallet}, password: ${obj.password} }`)
    console.log('\n')


    // let question = readlineSync.question(` Choose the difficult of the level: (${chalk.gray('easy')},${chalk.green('medium')},${chalk.red('hard')}): `)

    const readlineSync = require('readline-sync'),
        animals = [chalk.gray('easy'),chalk.green('medium'),chalk.red('hard'),],
        index = readlineSync.keyInSelect(animals, 'Choose the difficult of the level: ');

    if ( index === 0 ) {

        const prompt = new Quiz({
            name: 'JavaScript',
            message: 'What type of data is does not exit in JavaScript? ',
            choices: ['boolean', 'indexof', 'number', 'object'],
            correctChoice: 1
        });

        prompt
            .run()
            .then(answer => {
                if (answer.correct) {
                    console.log('Correct!');
                    let bonus = 50;
                    console.log(chalk.green('Bonus + 50$:'),'{wallet:',`${+obj.wallet + bonus}}`)
                    console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${+obj.wallet + bonus}, password: ${obj.password} }`)
                } else {
                    console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
                    let loss = 50;
                    console.log(chalk.red('Loss - 50$:'),'{wallet:',`${+obj.wallet - loss}}`)
                    console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${+obj.wallet - loss}, password: ${obj.password}}`)
                }
            })
            .catch(console.error);

    }
    if ( index === 1 ) {
        const prompt = new Quiz({
            name: 'JavaScript',
            message: 'How else can the ternary operator be called ? ',
            choices: ['switch', 'if else', 'question mark', 'point'],
            correctChoice: 2
        });

        prompt
            .run()
            .then(answer => {
                if (answer.correct) {
                    console.log('Correct!');
                    let bonus = 100;
                    console.log(chalk.green('Bonus + 100$:'),'{wallet:',`${+obj.wallet + bonus}}`)
                    console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${+obj.wallet + bonus}, password: ${obj.password} }`)
                } else {
                    console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
                    let loss = 100;
                    console.log(chalk.red('Loss - 100$:'),'{wallet:',`${+obj.wallet - loss}}`)
                    console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${+obj.wallet - loss}, password: ${obj.password}}`)
                }
            })
            .catch(console.error);
    }
    if ( index === 2 ) {
        const prompt = new Quiz({
            name: 'JavaScript',
            message: 'Find the wrong string method ',
            choices: ['toLowerCase', 'startsWith', 'indexof', 'includes'],
            correctChoice: 2
        });

        prompt
            .run()
            .then(answer => {
                if (answer.correct) {
                    console.log('Correct!');
                    let bonus = 200;
                    console.log(chalk.green('Bonus + 200$:'),'{wallet:',`${+obj.wallet + bonus}}`)
                    console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${+obj.wallet + bonus}, password: ${obj.password} }`)
                } else {
                    console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
                    let loss = 200;
                    console.log(chalk.red('Loss - 200$:'),'{wallet:',`${+obj.wallet - loss}}`)
                    console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${+obj.wallet - loss}, password: ${obj.password}}`)
                }
            })
            .catch(console.error);
    }
}
