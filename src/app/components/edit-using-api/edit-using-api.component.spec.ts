import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsingApiComponent } from './edit-using-api.component';

describe('EditUsingApiComponent', () => {
  let component: EditUsingApiComponent;
  let fixture: ComponentFixture<EditUsingApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUsingApiComponent]
    });
    fixture = TestBed.createComponent(EditUsingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
