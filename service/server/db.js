require('dotenv').config();
const mysql = require('mysql');
const {promisify} = require('util');

class Db {

    static connected = false;
    static connection = {};

    constructor() {
        if (!Db.connected) {
            Db.connection = this.connect();
            Db.connected = true;
        }
        this.pool = Db.connection;
    }

    connect() {
        return mysql.createPool({
            host: 'localhost',
            user: 'database_user',
            password: 'Password',
            database: 'coin_catalog'
        });
    }

    query() {
        return promisify(this.pool.query).bind(this.pool);
    }
}

module.exports = Db;
