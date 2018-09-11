import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowemployeesComponent } from './showemployees.component';

describe('ShowemployeesComponent', () => {
  let component: ShowemployeesComponent;
  let fixture: ComponentFixture<ShowemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
