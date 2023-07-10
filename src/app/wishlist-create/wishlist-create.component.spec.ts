/*
======================================
; Title: wishlist-create.component.spec.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 6.2 Instructions
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistCreateComponent } from './wishlist-create.component';

describe('WishlistCreateComponent', () => {
  let component: WishlistCreateComponent;
  let fixture: ComponentFixture<WishlistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
