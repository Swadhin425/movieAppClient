/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LikeDislikeComponent } from './like-dislike.component';

describe('LikeDislikeComponent', () => {
  let component: LikeDislikeComponent;
  let fixture: ComponentFixture<LikeDislikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeDislikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeDislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
