/*
======================================
; Title: books.service.ts
; Author: Chris Gorham
; Date: 10 July 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 8.2 Instructions
;=====================================
*/

// imports
import { IBook } from './book.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // the ibsns that will be pulled from the API
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ]
  constructor(private http: HttpClient) {}

  // get books function that returns all books, pulling the data from the API
  getBooks() {
    let params = new HttpParams();

    // entries for bibkeys, isbns that converts the array of ibsns to a comma delimited string
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    // returns the http.get function passing in the openlibrary url and the params object
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }
}

