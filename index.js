const readlineSync = require('readline-sync');
const chalk = require('chalk');
const inquirer = require('inquirer');

console.log('       ====================================================================')
console.log(chalk.magenta(' -- Hello lucky guy, you have the opportunity to win cool prizes  are you ready? -- '))
console.log('       ====================================================================')


const obj = {
    name: '',
    wallet: 0,
    password: ''
}
if (readlineSync.keyInYN(chalk.green(' Try to Register? '))) {

    obj.name = readlineSync.question(chalk.gray.underline(' What your name?: '))
        obj.wallet = readlineSync.question(chalk.gray.underline(' Account balance: '))
        obj.password = readlineSync.question(chalk.gray.underline(' Your password?: '))


} else {
    console.log(chalk.red('Error: Fill in all empty fields!'));
}
if (obj.name.length === 0 || obj.password.length === 0 || obj.wallet.length === 0) {
    console.log(chalk.red('Error: Fill in all empty fields!'));

} else {

    console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${obj.wallet}, password: ${obj.password} }`)
    console.log('\n')

    console.log('Choose a task. ')


    const readlineSync = require('readline-sync'),
        animals = [chalk.gray('easy'), chalk.green('medium'), chalk.red('hard'),],
        index = readlineSync.keyInSelect(animals, 'Choose the difficult of the level: ');

    if (index === 0) {

        function one() {
            inquirer.prompt(
                [
                    {
                        type: 'list',
                        name: 'answersOne',
                        message: 'What type of data is does not exit in JavaScript? ',
                        choices: ['boolean', 'indexof', 'number', 'object'],
                    },
                    {
                        type: 'list',
                        name: 'answersTwo',
                        message: 'How else can the ternary operator be called ? ',
                        choices: ['switch', 'if else', 'question mark', 'point'],
                    },
                    {
                        type: 'list',
                        name: 'answersThree',
                        message: 'Find the wrong string method ',
                        choices: ['toLowerCase', 'startsWith', 'indexof', 'includes'],
                    },
                ]
            )
                .then(answer => {
                    let w = 0;
                    let countOne = 0;
                    let arr = answer
                    if (arr['answersOne'] === 'indexof') {
                        console.log(`${chalk.blue(arr['answersOne'])}: ${chalk.green('The answer is correct!')}`)
                        w += 10
                        countOne++
                    } else {
                        console.log(`${chalk.blue(arr['answersOne'])}: ${chalk.red('The answer is incorrect!')}`)
                    }
                    if (arr['answersTwo'] === 'question mark') {
                        console.log(`${chalk.blue(arr['answersTwo'])}: ${chalk.green('The answer is correct!')}`)
                        w += 10
                        countOne++
                    } else {
                        console.log(`${chalk.blue(arr['answersTwo'])}: ${chalk.red('The answer is incorrect!')}`)
                    }
                    if (arr['answersThree'] === 'indexof') {
                        console.log(`${chalk.blue(arr['answersThree'])}: ${chalk.green('The answer is correct!')}`)
                        w += 10
                        countOne++
                    } else {
                        console.log(`${chalk.blue(arr['answersThree'])}: ${chalk.red('The answer is incorrect!')}`)
                    }
                    if (countOne < 3) {
                        one()
                    }
                    if (countOne === 3) {
                        console.log(chalk.green(`Bonus + ${w}:`), '{wallet:', `${+obj.wallet + w}}`)
                        console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${+obj.wallet + w}, password: ${obj.password} }`)

                    }
                })
        }

        one()

    }
    if (index === 1) {

        function two() {
            inquirer.prompt(
                [
                    {
                        type: 'list',
                        name: 'answersOne',
                        message: 'What type of data is does not exit in JavaScript? ',
                        choices: ['boolean', 'indexof', 'number', 'object'],
                    },
                    {
                        type: 'list',
                        name: 'answersTwo',
                        message: 'How else can the ternary operator be called ? ',
                        choices: ['switch', 'if else', 'question mark', 'point'],
                    },
                    {
                        type: 'list',
                        name: 'answersThree',
                        message: 'Find the wrong string method ',
                        choices: ['toLowerCase', 'startsWith', 'indexof', 'includes'],
                    },
                ]
            )
                .then(answer => {
                    let w = 0;
                    let countTwo = 0;
                    let arr = answer
                    if (arr['answersOne'] === 'indexof') {
                        console.log(`${chalk.blue(arr['answersOne'])}: ${chalk.green('The answer is correct!')}`)
                        w += 50
                        countTwo++
                    } else {
                        console.log(`${chalk.blue(arr['answersOne'])}: ${chalk.red('The answer is incorrect!')}`)
                    }
                    if (arr['answersTwo'] === 'question mark') {
                        console.log(`${chalk.blue(arr['answersTwo'])}: ${chalk.green('The answer is correct!')}`)
                        w += 50
                        countTwo++
                    } else {
                        console.log(`${chalk.blue(arr['answersTwo'])}: ${chalk.red('The answer is incorrect!')}`)
                    }
                    if (arr['answersThree'] === 'indexof') {
                        console.log(`${chalk.blue(arr['answersThree'])}: ${chalk.green('The answer is correct!')}`)
                        w += 50
                        countTwo++
                    } else {
                        console.log(`${chalk.blue(arr['answersThree'])}: ${chalk.red('The answer is incorrect!')}`)
                    }
                    if (countTwo < 3) {
                        two()
                    }
                    if (countTwo === 3) {
                        console.log(chalk.green(`Bonus + ${w}:`), '{wallet:', `${+obj.wallet + w}}`)
                        console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${+obj.wallet + w}, password: ${obj.password} }`)
                    }
                })
        }

        two()

    }
    if (index === 2) {

        function three() {
            inquirer.prompt(
                [
                    {
                        type: 'list',
                        name: 'answersOne',
                        message: 'What type of data is does not exit in JavaScript? ',
                        choices: ['boolean', 'indexof', 'number', 'object'],
                    },
                    {
                        type: 'list',
                        name: 'answersTwo',
                        message: 'How else can the ternary operator be called ? ',
                        choices: ['switch', 'if else', 'question mark', 'point'],
                    },
                    {
                        type: 'list',
                        name: 'answersThree',
                        message: 'Find the wrong string method ',
                        choices: ['toLowerCase', 'startsWith', 'indexof', 'includes'],
                    },
                ]
            )
                .then(answer => {
                    let w = 0;
                    let countThree = 0;
                    let arr = answer
                    if (arr['answersOne'] === 'indexof') {
                        console.log(`${chalk.blue(arr['answersOne'])}: ${chalk.green('The answer is correct!')}`)
                        w += 100
                        countThree++
                    } else {
                        console.log(`${chalk.blue(arr['answersOne'])}: ${chalk.red('The answer is incorrect!')}`)
                    }
                    if (arr['answersTwo'] === 'question mark') {
                        console.log(`${chalk.blue(arr['answersTwo'])}: ${chalk.green('The answer is correct!')}`)
                        w += 100
                        countThree++
                    } else {
                        console.log(`${chalk.blue(arr['answersTwo'])}: ${chalk.red('The answer is incorrect!')}`)
                    }
                    if (arr['answersThree'] === 'indexof') {
                        console.log(`${chalk.blue(arr['answersThree'])}: ${chalk.green('The answer is correct!')}`)
                        w += 100
                        countThree++
                    } else {
                        console.log(`${chalk.blue(arr['answersThree'])}: ${chalk.red('The answer is incorrect!')}`)
                    }
                    if (countThree < 3) {
                        three()
                    }
                    if (countThree === 3) {
                        console.log(chalk.green(`Bonus + ${w}:`), '{wallet:', `${+obj.wallet + w}}`)
                        console.log(chalk.black.bold.bgYellow(`\n Your Account `), ` \n { name: ${obj.name}, wallet: ${+obj.wallet + w}, password: ${obj.password} }`)
                    }
                })
        }

        three()

    }
}

