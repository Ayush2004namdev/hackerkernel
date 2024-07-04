module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'ayush',
        database: 'user_task_db'
      },
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      }
    }
  };
  