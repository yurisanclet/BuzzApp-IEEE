const knex = {
    development: {
        client: "mysql",
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user : 'root',
            password: 'yuri1234',
            database: 'databaseusers',
        },
        migrations: {
            tableName: 'migrations',
            directory: `${__dirname}/src/database/migrations`,
        }
    }
}

module.exports = knex;