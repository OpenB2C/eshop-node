const mysql = require('think-model-mysql');
const ENV_MYSQL_KEYS = {
  MYSQL_DB_NAME: 'database',
  MYSQL_HOST: 'host',
  MYSQL_PORT: 'port',
  MYSQL_USER: 'user',
  MYSQL_PASSWORD: 'password'
};
const mysqlEnvObject = {};
for (var item in ENV_MYSQL_KEYS) {
  mysqlEnvObject[ENV_MYSQL_KEYS[item]] = process.env[item];
  if (!process.env[item]) {
    throw new Error('DB Environment Error: \n environemnt [' + item + '] is not set');
  }
}

module.exports = {
  handle: mysql,
  database: mysqlEnvObject.database,
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: mysqlEnvObject.host,
  port: mysqlEnvObject.port,
  user: mysqlEnvObject.user,
  password: mysqlEnvObject.password,
  dateStrings: true
};
