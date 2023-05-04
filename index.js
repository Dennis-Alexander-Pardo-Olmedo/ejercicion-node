import { suma } from './controller'
import { multiplicasion } from './controller'
import chalk from 'chalk'

const resultado = multiplicasion(suma(1,5) , suma(4,5));
console.log(chalk.green(resultado))