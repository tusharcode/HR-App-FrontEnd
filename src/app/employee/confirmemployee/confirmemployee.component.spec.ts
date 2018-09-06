import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmemployeeComponent } from './confirmemployee.component';

describe('ConfirmemployeeComponent', () => {
  let component: ConfirmemployeeComponent;
  let fixture: ComponentFixture<ConfirmemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
