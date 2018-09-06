import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeebankdetailsComponent } from './employeebankdetails.component';

describe('EmployeebankdetailsComponent', () => {
  let component: EmployeebankdetailsComponent;
  let fixture: ComponentFixture<EmployeebankdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeebankdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeebankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
