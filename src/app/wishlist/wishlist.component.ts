/*
======================================
; Title: wishlist.component.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 6.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  // adds item to the items array
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
