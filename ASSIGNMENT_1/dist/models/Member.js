"use strict";
// This represents a registered member of the library who can borrow and return books
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    constructor(id, name, borrowedBooks = []) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    }
    borrowBook(book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.toggleAvailability();
        }
        else {
            console.log(`The book: ${book} is not available`);
        }
    }
    returnBook(book) {
        book.toggleAvailability();
        const index = this.borrowedBooks.findIndex(function (b) {
            return b.id === book.id;
        });
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1); // update member state
            book.isAvailable = true;
            // add the book back to the library
            console.log(`${this.name} returned "${book.title}`);
        }
        else {
            console.log(`${this.name} doesn't have "${book.title}`);
        }
    }
    listBorrowedBooks() {
        console.log(this.borrowedBooks);
    }
}
exports.Member = Member;
