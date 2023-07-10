/*
======================================
; Title: books.service.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 6.2 Instructions
;=====================================
*/

// imports
import { IBook } from './book.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
    books: Array<IBook>;

  constructor() {
  // creates the list of books
  this.books =  [
    {isbn: "9780743273565", title: "The Great Gatsby", description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.", numOfPages: 208, authors: ["F. Scott Fitzgerald"]},
    {isbn: "43419454", title: "On The Road", description: "On the Road is a 1957 novel by American writer Jack Kerouac, based on the travels of Kerouac and his friends across the United States. It is considered a defining work of the postwar Beat and Counterculture generations, with its protagonists living life against a backdrop of jazz, poetry, and drug use. The novel is a roman à clef, with many key figures of the Beat movement, such as William S. Burroughs (Old Bull Lee), Allen Ginsberg (Carlo Marx), and Neal Cassady (Dean Moriarty) represented by characters in the book, including Kerouac himself as the narrator Sal Paradise.", numOfPages: 320, authors: ["Jack Kerouac"]},
    {isbn: "0-87685-558-3", title: "Ham on Rye", description: "Ham on Rye is a 1982 semi-autobiographical novel by American author and poet Charles Bukowski. Written in the first person, the novel follows Henry Chinaski, Bukowski's thinly veiled alter ego, during his early years. Written in Bukowski's characteristically straightforward prose, the novel tells of his coming-of-age in Los Angeles during the Great Depression.", numOfPages: 288, authors: ["Charles Bukowski"]},
    {isbn: "0-385-50447-0", title: "Lullaby", description: "Lullaby is a horror-satire novel by American author Chuck Palahniuk, published in 2002. It won the 2003 Pacific Northwest Booksellers Association Award, and was nominated for the Bram Stoker Award for Best Novel in 2002.", numOfPages: 272, authors: ["Chuck Palahniuk"]},
    {isbn: "0340028769", title: "The Sirens of Titan", description: "The Sirens of Titan is a comic science fiction novel by Kurt Vonnegut Jr., first published in 1959. His second novel, it involves issues of free will, omniscience, and the overall purpose of human history. Much of the story revolves around a Martian invasion of Earth.", numOfPages: 319, authors: ["Kurt Vonnegut"]},
  ]}
  // get books function that returns all books
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // get book function that returns a book by its ISBN
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
   }
