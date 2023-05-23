const {Database} = require("./database")

class Tasks {
    static Database = new Database("crud", "postgres", "12345")

    async createTask(name){
        return Tasks.Database.query('INSERT INTO tasks (task_message, task_time) VALUES($1, $2) RETURNING *', [name, new Date()]);
    }

    async getAllTasks(){
        return Tasks.Database.query('SELECT * FROM tasks');
    }

    async updateTask(id, name){
        return Tasks.Database.query('UPDATE tasks SET task_message = $1, task_time = $2 WHERE task_id = $3 RETURNING *', [name, new Date(), id]);
    }

    async deleteTask(id){
        return Tasks.Database.query('DELETE FROM tasks WHERE task_id = $1', [id]);
    }
}

module.exports.Tasks = Tasks