const knex = {
    development: {
        client: "mysql2",
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user : 'root',
            password: '',
            database: 'buzz_database',
        },
        migrations: {
            tableName: 'migrations',
            directory: `${__dirname}/src/database/migrations`,
        }
    }
}

module.exports = knex;