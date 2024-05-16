#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n Welcome To Code-With-Areeba-Currency-Convertor \n"));
// List of currncies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.92,
    "JYP": 155.3,
    "CAD": 1.36,
    "AUD": 1.50,
    "PKR": 278
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select a currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select a currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// CURRENCY CONVERSION METHOD
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// USING FORMULA
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//DISPLAY THE CONERTED AMOUNT
console.log(`Converted Amount : ${converted_amount}`);
