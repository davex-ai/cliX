#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .name("clix")
    .description("My awesome CLI tool")
    .version("1.0.0");
program
    .command("greet <name>")
    .description("Greet someone")
    .action((name) => {
    console.log(`Hello, ${name}!`);
});
program
    .command("sum <a> <b>")
    .description("Add two numbers")
    .action((a, b) => {
    const result = Number(a) + Number(b);
    console.log(`${a} + ${b} = ${result}`);
});
program.parse(process.argv);
//src/index.ts
//# sourceMappingURL=index.js.map