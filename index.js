#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const program = new commander_1.Command();
program
    .name("clix")
    .description("My awesome CLI tool")
    .version("1.0.0");
// Greet command
program
    .command("greet <name>")
    .description("Greet someone")
    .action((name) => {
    console.log(chalk_1.default.green(`👋 Hello, ${name}!`));
});
// Sum command
program
    .command("sum <a> <b>")
    .description("Add two numbers")
    .action((a, b) => {
    const result = Number(a) + Number(b);
    console.log(chalk_1.default.blue(`${a} + ${b} = ${result}`));
});
// Random joke command
program
    .command("joke")
    .description("Tell a random joke")
    .action(() => {
    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why did the function return early? Because it had too many arguments!",
        "I would tell you a UDP joke, but you might not get it."
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    console.log(chalk_1.default.yellow(joke));
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map