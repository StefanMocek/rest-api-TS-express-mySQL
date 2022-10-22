"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const mysql_1 = require("../config/mysql");
const NAMESPACE = "books";
const createBook = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Creating book");
    let { author, title } = req.body;
    let query = `INSERT INTO books (author, title) VALUES ("${author}", "${title}")`;
    (0, mysql_1.Connect)()
        .then(connection => {
        (0, mysql_1.Query)(connection, query)
            .then(result => {
            return res.status(200).json({
                result
            });
        })
            .catch(error => {
            logging_1.default.error(NAMESPACE, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch(error => {
        logging_1.default.error(NAMESPACE, error);
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const getAllBooks = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Getting all books");
    let query = `SELECT * from books`;
    (0, mysql_1.Connect)()
        .then(connection => {
        (0, mysql_1.Query)(connection, query)
            .then(results => {
            return res.status(200).json({
                results
            });
        })
            .catch(error => {
            logging_1.default.error(NAMESPACE, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch(error => {
        logging_1.default.error(NAMESPACE, error);
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.default = { getAllBooks, createBook };
