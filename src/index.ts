#!/usr/bin/env node
import { Command } from "commander"; 

console.log("Hello from my CLI tool!");

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

program.parse(process.argv);

//src/index.ts
