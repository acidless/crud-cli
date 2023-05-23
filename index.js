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
        if(data.rows[0]){
            console.log(data.rows[0]);
        }else{
            console.log(`There is no task with this id!`);
        }
    })
    .command('delete [id]', 'Delete task', (yargs) => {
        return yargs
            .positional('id', {
                describe: 'Task id',
            })
    }, async (argv) => {
        const task = await new Tasks().deleteTask(argv.id);
        if(task.rows[0]) {
            console.log(`Task with id ${argv.id} deleted!`);
        } else{
            console.log(`There is no task with this id!`);
        }
    })
    .parse()

