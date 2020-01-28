import { Author } from './author';

export class Book {
    id: string;
    isbn: string;
    title: string;
    author: Author;

    constructor() {
        this.author = new Author();
    }
}