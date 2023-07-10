/*
======================================
; Title: about.component.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 6.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';

// defines component selector, html, and css paths
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
// exports
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
