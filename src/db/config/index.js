require('dotenv').config();

const logger = require('../../logger');

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
  benchmark: true,
  logging: (sql, executeTime) => {
    logger.info(sql, `(${executeTime}ms)`);
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
