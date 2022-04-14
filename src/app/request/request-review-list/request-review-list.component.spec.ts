import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReviewListComponent } from './request-review-list.component';

describe('RequestReviewListComponent', () => {
  let component: RequestReviewListComponent;
  let fixture: ComponentFixture<RequestReviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestReviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
