require('dotenv').config()

module.exports = {
  geek4geek: {
    client: process.env.DB_DRIVER,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    }
  }
}
