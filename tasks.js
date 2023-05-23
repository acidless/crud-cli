const {Database} = require("./database")

class Tasks {
    static Database = new Database("crud", "postgres", "12345")

    async createTask(name){
        return Tasks.Database.query('INSERT INTO tasks (task_message, task_time) VALUES($1, $2) RETURNING *', [name, new Date()]);
    }
}

module.exports.Tasks = Tasks