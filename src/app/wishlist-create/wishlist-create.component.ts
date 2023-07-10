/*
======================================
; Title: wishlist-create.component.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 6.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {
  // the output property for sharing data between components
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;


  constructor() {
    this.item = {} as IWishlistItem;
  }


  ngOnInit(): void {

  }
  // add item function
  addItem() {
    this.addItemEmitter.emit({ title: this.item.title, authors: this.item.authors })
    this.item = {} as IWishlistItem;
  }

}
