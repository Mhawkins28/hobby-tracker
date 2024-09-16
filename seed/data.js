import db from "../db/connection.js"
// import shows from "./shows.json" assert { type: "json" };
import books from "./books.json" assert { type: "json" }; 
import Book from "../models/Book.js"
// import Series from "../models/Series.js"

const insertData = async () => {
  await Book.deleteMany({});
  await Book.create(books);

  // await Series.deleteMany({});
  // await Series.create(shows);

  await db.close();
};

insertData();
