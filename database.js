const {Client} = require('pg')

class Database {
    constructor(database, user, password) {
        this.client = new Client({
            database,
            user,
            password,
        })
    }

    async connect(){
        await this.client.connect();
    }

    async query(query, ...args){
        try{
            if(!this.client.connected){
                await this.connect();
            }

            const result = await this.client.query(query, ...args);
            await this.client.end();
            return result;
        }
        catch(e){
            console.log(`Error: ${e.message}`);
        }
    }
}

module.exports.Database = Database;