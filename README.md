# clix

> A simple and powerful CLI tool built with Node.js, TypeScript, Commander.js, and Chalk.  
> Features multiple commands, colorful output, and an easy dev workflow.

---

## Table of Contents

- [Installation](#installation)  
- [Usage](#usage)  
- [Commands](#commands)  
- [Development](#development)  
- [License](#license)

---

## Installation

You can install `clixx` globally via npm:

```bash
npm install -g clixx
Make sure you have Node.js >= 18 and npm installed.
```

Usage

After installing globally, you can run the CLI using:

clixx <command> [options]


Example:

clixx greet Dave


Output:

Hello from my CLI tool!
Hello, Dave!

Commands
greet <name>

Greet someone with a friendly message.

clixx greet Alice


Output:

Hello from my CLI tool!
Hello, Alice!

sum <a> <b>

Add two numbers together.

clixx sum 5 10


Output:

5 + 10 = 15

Development

Clone the repository and install dependencies:

git clone https://github.com/davex-ai/cliX.git
cd cliX
npm install

Run in dev mode:
npm run dev

Build the project:
npm run build


This will compile TypeScript files into dist/.

Local Testing

You can link the package locally to test it as a global CLI:

npm link
clixx greet Test

Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.

License

This project is licensed under the MIT License.