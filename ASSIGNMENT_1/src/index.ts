// This is the entry point for the LMS

import { Book } from "./models/Book";
import { Member } from "./models/Member";
import { Library } from "./models/Library";

const library = new Library();

const book1 = new Book(1, "1923", "George Orwin");
const book2 = new Book(2, "Dune", "Frank Hertz");
const book3 = new Book(3, "Last Days", "Alexander Shaun");
const book4 = new Book(4, "Mechanics of Materials", "Beer and Johnston");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

const alex = new Member(101, "Alex");
const bob = new Member(102, "Bobby");

library.addMember(alex);
library.addMember(bob);

console.log('Books in Library');
library.listBooks();

console.log("\n Registered members:");
library.listMembers();

console.log("\n--- Borrowing ---");
library.borrowBook(101, 1);
library.borrowBook(101, 2);
library.borrowBook(102, 4);

library.returnBook(101, 2);

library.listAvailableBooks();

console.log("\n FIND");
const book = library.findBookById(2);
console.log(book)