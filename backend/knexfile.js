const knex = {
    development: {
        client: "mysql2",
        connection: {
            host: 'localhost',
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