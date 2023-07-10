/*
======================================
; Title: book-list.component.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 6.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
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

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }
  // show details function that retrieves the details for one book based on isbn input from the user
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
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
