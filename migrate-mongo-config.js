const dotenv = require('dotenv')
dotenv.config()

const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME

const dbString = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

const config = {
  mongodb: {
    url: dbString,
    databaseName: dbName,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js"
};

module.exports = config;
