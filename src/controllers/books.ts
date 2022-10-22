import {NextFunction, Request, Response} from "express";
import logging from "../config/logging";
import {Connect, Query} from "../config/mysql";


const NAMESPACE = "books";

const createBook = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Creating book");

  let {author, title} = req.body;

  let query = `INSERT INTO books (author, title) VALUES ("${author}", "${title}")`

  Connect()
  .then(connection => {
    Query(connection, query)
    .then(result => {
      return res.status(200).json({
        result
      })
    })
    .catch(error => {
      logging.error(NAMESPACE, error);
      return res.status(500).json({
        message: error.message,
        error
      })
    })
    .finally(() => {
      connection.end()
    })
  })
  .catch(error => {
    logging.error(NAMESPACE, error);
    return res.status(500).json({
      message: error.message,
      error
    })
  })
}

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Getting all books");

  let query = `SELECT * from books`;

  Connect()
  .then(connection => {
    Query(connection, query)
    .then(results => {
      return res.status(200).json({
        results
      })
    })
    .catch(error => {
      logging.error(NAMESPACE, error);
      return res.status(500).json({
        message: error.message,
        error
      })
    })
    .finally(() => {
      connection.end()
    })
  })
  .catch(error => {
    logging.error(NAMESPACE, error);
    return res.status(500).json({
      message: error.message,
      error
    })
  })
}

export default { getAllBooks, createBook}