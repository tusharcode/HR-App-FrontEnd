import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeresignComponent } from './employeeresign.component';

describe('EmployeeresignComponent', () => {
  let component: EmployeeresignComponent;
  let fixture: ComponentFixture<EmployeeresignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeresignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeresignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
