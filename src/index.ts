#!/usr/bin/env node
import { Command } from "commander"; 

const program = new Command();

program
  .name("clix")
  .description("My awesome CLI tool")
  .version("1.0.0");

program
  .command("greet <name>")
  .description("Greet someone")
  .action((name: string) => {
    console.log(`Hello, ${name}!`);
  });

program
  .command("sum <a> <b>")
  .description("Add two numbers")
  .action((a: string, b: string) => {
    const result = Number(a) + Number(b);
    console.log(`${a} + ${b} = ${result}`);
  });


program.parse(process.argv);

//src/index.ts
