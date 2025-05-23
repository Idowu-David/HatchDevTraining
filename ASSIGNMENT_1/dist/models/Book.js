"use strict";
// This represents a book in the library collection
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author, isAvailable = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
exports.Book = Book;
