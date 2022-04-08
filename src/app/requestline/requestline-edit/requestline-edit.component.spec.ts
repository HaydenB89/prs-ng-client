import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineEditComponent } from './requestline-edit.component';

describe('RequestlineEditComponent', () => {
  let component: RequestlineEditComponent;
  let fixture: ComponentFixture<RequestlineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestlineEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
