/*
======================================
; Title: book-details-dialog.component.spec.ts
; Author: Chris Gorham
; Date: 26 June 2023
; Description: This code supports functionality for the In-N-Out Books Project
; Sources Used:
; Exercise 6.2 Instructions
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailsDialogComponent } from './book-details-dialog.component';

describe('BookDetailsDialogComponent', () => {
  let component: BookDetailsDialogComponent;
  let fixture: ComponentFixture<BookDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
