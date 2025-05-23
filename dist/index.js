"use strict";
// This is the entry point for the LMS
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./models/Book");
const Member_1 = require("./models/Member");
const book1 = new Book_1.Book(1, "1923", "George Orwin");
const book2 = new Book_1.Book(2, "Dune", "Frank Hertz");
const book3 = new Book_1.Book(3, "Last Days", "Alexander Shaun");
const member1 = new Member_1.Member(1, "David");
member1.borrowBook(book1);
member1.borrowBook(book2);
member1.borrowBook(book3);
member1.listBorrowedBooks();
