/*
======================================
; Title: app-routing.module.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 6.2 Instructions
;=====================================
*/

// imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// define routes and match to app components
const routes: Routes = [
  {
    path: '', component: BookListComponent
  },
  {
    path: 'book-list', component: BookListComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// exports
export class AppRoutingModule { }
