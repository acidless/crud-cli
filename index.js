const yargs = require("yargs");
const {hideBin} = require('yargs/helpers')
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
    .command('get', 'Get all tasks', (yargs) => {
        return yargs
    }, async (argv) => {
        const data = await new Tasks().getAllTasks()
        console.log(data.rows);
    })
    .command('update [id] [task]', 'Update task text', (yargs) => {
        return yargs
            .positional('id', {
                describe: 'Task id',
            }).positional('task', {
                describe: 'New task text',
            })
    }, async (argv) => {
        const data = await new Tasks().updateTask(argv.id, argv.task)
        console.log(data.rows[0]);
    })
    .command('delete [id]', 'Delete task', (yargs) => {
        return yargs
            .positional('id', {
                describe: 'Task id',
            })
    }, async (argv) => {
        await new Tasks().deleteTask(argv.id);
        console.log(`Task with id ${argv.id} deleted!`);
    })
    .parse()

