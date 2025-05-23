// This represents a registered member of the library who can borrow and return books

import { Book } from "./Book";

export class Member {
  constructor(
    public id: number,
    public name: string,
    public borrowedBooks: Book[] = []
  ) {}

  borrowBook(book: Book): void {
    if (book.isAvailable) {
      this.borrowedBooks.push(book);
      book.toggleAvailability();
    } else {
      console.log(`The book: ${book} is not available`);
    }
  }

  returnBook(book: Book): void {
    book.toggleAvailability();
    const index = this.borrowedBooks.findIndex(function (b) {
      return b.id === book.id;
    });
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1); // update member state
      book.isAvailable = true;

      // add the book back to the library

      console.log(`${this.name} returned "${book.title}`);
    } else {
      console.log(`${this.name} doesn't have "${book.title}`);
    }
	}
	
	listBorrowedBooks(): void {
		console.log(this.borrowedBooks);
	}
}
