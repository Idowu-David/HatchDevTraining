// This is the entry point for the LMS

import { Book } from "./models/Book";
import { Member } from "./models/Member";

const book1 = new Book(1, "1923", "George Orwin");
const book2 = new Book(2, "Dune", "Frank Hertz");
// const book3 = new Book(3, "Last Days", "Alexander Shaun");

const member1 = new Member(1, "David");

member1.borrowBook(book1);
member1.borrowBook(book2);
// member1.borrowBook(book3);

// member1.listBorrowedBooks();

// member1.returnBook(book1);

// console.log(member1.borrowedBooks)