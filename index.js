const yargs = require("yargs");
const { hideBin } = require('yargs/helpers')
const {Tasks} = require("./tasks")

yargs(hideBin(process.argv))
    .command('create [task]', 'Create new Task', (yargs) => {
        return yargs
            .positional('task', {
                describe: 'Task text',
            })
    }, async (argv) => {
        const data = await new Tasks().createTask(argv.task)
        console.log(data.rows[0]);
    })
    .parse()

