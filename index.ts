#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any = {
  USD: 1,
  PKR: 277.58,
  IND: 83.3,
  EURO: 0.92,
  Saudi_Riyal: 3.75,
};
let user_ans = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Select your Currency",
    choices: ["USD","PKR","IND","EURO","Saudi_Riyal"],
     },
  {
    name: "to",
    type: "list",
    message: "Select currency to convert ",
    choices: ["USD","PKR","IND","EURO","Saudi_Riyal"],
  },
  {
    name: "amount",
    type: "input",
    message: "Enter Your Amount: ",
  },
]);
let from_amount = currency[user_ans.from];
let to_amount = currency[user_ans.to];
let base_amount = user_ans.amount / from_amount;
let conversion_amount = base_amount * to_amount;
console.log("Your converted amount is:",conversion_amount);
