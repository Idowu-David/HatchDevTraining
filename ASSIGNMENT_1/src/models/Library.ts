// This acts as the central manager of the system, maintaining all books and members

import { Book } from "./Book";
import { Member } from "./Member";

export class Library {
  private books: Book[] = [];
  private members: Member[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library`);
  }

  addMember(member: Member): void {
    this.members.push(member);
    console.log(`Member "${member.name}" added to the library`);
  }

  findBookById(id: number): Book | undefined {
    return this.books.find(function (b) {
      return b.id === id;
    });
  }

  findMemberById(id: number): Member | undefined {
    return this.members.find(function (m) {
      return m.id === id;
    });
  }

  listBooks(): void {
    if (this.books.length === 0) {
      console.log("No books available in the libary");
      return;
    }

    console.log("Books in the Library:");
    this.books.forEach((book, index) => {
      console.log(
        `${index + 1}. ${book.title} by ${book.author} - ${
          book.isAvailable ? "Available" : "Borrowed"
        }`
      );
    });
  }

  listAvailableBooks(): void {
    const availableBooks = this.books.filter((book) => book.isAvailable);

    if (availableBooks.length === 0) {
      console.log("No books are currently available");
      return;
    }
    console.log("Available Books:");
    availableBooks.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} by ${book.author}`);
    });
  }

  borrowBook(memberId: number, bookId: number): void {
    const member = this.findMemberById(memberId);
    const book = this.findBookById(bookId);

    if (!member || !book) {
      console.log("Member or Book not found");
      return;
    }

    if (!book.isAvailable) {
      console.log("Book is already borrowed");
      return;
    }

    member.borrowBook(book);
    console.log(`${member.name} has borrowed "${book.title}"`);
  }

  returnBook(memberId: number, bookId: number): void {
    const member = this.findMemberById(memberId);
    const book = this.findBookById(bookId);

    if (!member || !book) {
      console.log("Member or Book not found");
      return;
    }

    // Check if the member actually borrowed the book
    const index = member.borrowedBooks.findIndex((b) => b.id === book.id);
    if (index === -1) {
      console.log(`${member.name} did not borrow "${book.title}"`);
      return;
    }

    member.borrowedBooks.splice(index, 1);
    book.toggleAvailability();

    console.log(`${member.name} returned "${book.title}"`);
  }

  listBorrowedBooksByMember(memberId: number): void {
    const member = this.findMemberById(memberId);

    if (!member) {
      console.log("Member not found");
      return;
    }

    console.log("Borrowed Books:");
    member.borrowedBooks.forEach((book, index) => {
      console.log(`${index + 1}. ${book}`);
    });
  }

  listMembers(): void {
    if (this.members) {
      this.members.forEach((member, index) => {
        console.log(`${index}. ${member.name}`);
      });
    } else {
      console.log("No member in the Library");
    }
  }
}
