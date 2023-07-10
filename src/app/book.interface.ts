/*
======================================
; Title: book.interface.ts
; Author: Chris Gorham
; Date: 10 July 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 8.2 Instructions
;=====================================
*/

// creates IBook interface
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
