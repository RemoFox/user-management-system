import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterlayoutComponent } from './masterlayout.component';

describe('MasterlayoutComponent', () => {
  let component: MasterlayoutComponent;
  let fixture: ComponentFixture<MasterlayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterlayoutComponent]
    });
    fixture = TestBed.createComponent(MasterlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
