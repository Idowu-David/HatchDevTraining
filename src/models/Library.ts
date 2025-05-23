// This acts as the central manager of the system, maintaining all books and members

import { Book } from "./Book";
import { Member } from "./Member";

export class Library {
  private books: Book[] = [];
  private members: Member[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book.title} added to the library`);
  }

  addMember(member: Member): void {
    this.members.push(member);
    console.log(`Member "${member.name} added to the library`);
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
    console.log(this.books
  }
}
