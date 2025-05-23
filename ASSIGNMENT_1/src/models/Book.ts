// This represents a book in the library collection

export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public isAvailable: boolean = true
  ) {}

  toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
  }
}
