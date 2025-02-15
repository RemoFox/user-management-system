import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserUsingApiComponent } from './add-user-using-api.component';

describe('AddUserUsingApiComponent', () => {
  let component: AddUserUsingApiComponent;
  let fixture: ComponentFixture<AddUserUsingApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserUsingApiComponent]
    });
    fixture = TestBed.createComponent(AddUserUsingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
