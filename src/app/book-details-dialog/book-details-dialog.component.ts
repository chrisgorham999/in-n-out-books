/*
======================================
; Title: book-details-dialog.component.ts
; Author: Chris Gorham
; Date: 10 July 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 8.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>,@Inject(MAT_DIALOG_DATA) data){
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
