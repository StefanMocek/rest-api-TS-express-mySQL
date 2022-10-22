import dotenv from "dotenv";
import path from "path"

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYQSL_USER = process.env.MYQSL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

const MYSQL = {
  host: MYSQL_HOST,
  user: MYQSL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  mysql: MYSQL,
  server: SERVER,
};

export default config;
