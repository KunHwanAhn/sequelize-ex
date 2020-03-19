require('dotenv').config();

const commonConfig = {
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    charset: 'utf8',
    timestamps: true,
    paranoid: true,
  },
  logging: (sql) => {
    /* eslint-disable */
    console.log(sql);
    /* eslint-enable */
  },
};

module.exports = {
  development: {
    ...commonConfig,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  test: {
    ...commonConfig,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: `${process.env.DB_NAME}_test`,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  production: {
    ...commonConfig,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: `${process.env.DB_NAME}_production`,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
};
