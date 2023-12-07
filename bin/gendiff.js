#!/usr/bin/env node
import { Command} from "commander";

const program = new Command();

program
  .name('helper')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .option('-f, --format <type>', 'output format')

// program.command('split')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action('privet');

program.parse(process.argv);
