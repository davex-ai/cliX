#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .name("clix")
  .description("My awesome CLI tool")
  .version("1.0.0");

// Greet command
program
  .command("greet <name>")
  .description("Greet someone")
  .action((name: string) => {
    console.log(chalk.green(`👋 Hello, ${name}!`));
  });

// Sum command
program
  .command("sum <a> <b>")
  .description("Add two numbers")
  .action((a: string, b: string) => {
    const result = Number(a) + Number(b);
    console.log(chalk.blue(`${a} + ${b} = ${result}`));
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
    console.log(chalk.yellow(joke));
  });

program.parse(process.argv);
