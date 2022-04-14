import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReviewItemComponent } from './request-review-item.component';

describe('RequestReviewItemComponent', () => {
  let component: RequestReviewItemComponent;
  let fixture: ComponentFixture<RequestReviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestReviewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
