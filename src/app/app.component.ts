/*
======================================
; Title: app.component.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 6.2 Instructions
;=====================================
*/

// imports
import { Component } from '@angular/core';

// defines selector, html, and css locations
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// exports
export class AppComponent {
 assignment: string;

 constructor() {
  this.assignment = "Exercise 6.2 - Input/Output Properties Part 1";
 }
}
