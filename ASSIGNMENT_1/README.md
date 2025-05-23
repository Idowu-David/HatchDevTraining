# **Library Management System**

## Description:

A simple system to manage books and members of a library using Object-Oriented Programming (OOP) principles.


<pre><code> Project Structure ``` library-system/ ├── src/ │ ├── models/ │ │ ├── Book.ts │ │ ├── Member.ts │ │ └── Library.ts │ └── index.ts ├── tsconfig.json ├── package.json └── README.md ``` </code></pre>

## **Classes**
  - Book
  - Member
  - Library


Book:
  This represents a book in the library collection.
  PROPERTIES:
    id: number - Unique identifier for the book
    title: string -Title of the book
    author: string - Author of the book
    isAvailable: boolean - indicates if the book is available for borrowing

  METHODS:
    toggleAvailability(): void - switches the availability status of the book (borrowed <-> available)


Member:
  This represents a registered member of the library who can borrow and return books
  PROPERTIES:
    id: number - Unique member ID
    name: string - Name of the member
    borrowedBooks: Book[] - List of books currently borrowed by the member
  
  METHODS:
    borrowBook(book: Book): void - Allows the member to borrow a book if it's available
      * To borrow a book:
        check the availability of the book, if available, push the book to the borrowedBooks of the Member, else, print "not available"
        if a book is borrowed, then it should be removed from the library.(toggleAvailability)
    returnBook(book: Book): void -Allows the member to return a previously borrowed book.
      * To return a book:
        change the state of the Book(isAvailable becomes true)
        get the index of the borrowed book and remove it from the list.
        add the book back to the library.
        update the state of the Member object(remove the book from their borrowed books)
 
Library:
  This acts as the central manager of the system, maintaining all books and members
  PROPERTIES:
    books: Book[] – All books in the system
    members: Member[] – All members of the system

  METHODS:
    addBook(book: Book): void – Adds a new book to the collection
    addMember(member: Member): void – Registers a new member
    findBookById(id: number): Book | undefined – Finds a book by its ID
    findMemberById(id: number): Member | undefined – Finds a member by their ID
    listBooks(): void – Displays all books with availability status
    listMembers(): void – Displays all members with how many books they’ve borrowed
    borrowBook(memberId: number, bookId: number): void - handles borrowing of books
    returnBook(memberId: number, bookId: number): void - returns the book to the library
    listAvailableBooks(): void
    listBorrowedBooksByMember(memberId: number): void
    listMembers(): void - lists all the registered members in the library
    