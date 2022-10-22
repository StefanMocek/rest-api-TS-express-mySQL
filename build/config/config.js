"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../../.env") });
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
exports.default = config;
