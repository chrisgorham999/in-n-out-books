/*
======================================
; Title: book-list.component.ts
; Author: Chris Gorham
; Date: 10 July 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 8.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


// sets the component selector, html, and css locations
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
// exports
export class BookListComponent implements OnInit {

  books: Array<IBook> = [];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      // iterates over the response data object using a for/in loops and checks if the res.hasOwnProperty(key) is true
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }

          // updates books with data from the API
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }
  // show details function that retrieves the details for one book based on isbn input from the user
  showBookDetails(isbn: string) {
    // updated during Exercise 8.2 to use the JavaScript find function to search the books array and return the matching book object
    this.book = this.books.find(book => book.isbn === isbn);
    // variable for our dialog for when the isbn is clicked
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book},
      disableClose: true,
      width: '800px'
    })
    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }

}
