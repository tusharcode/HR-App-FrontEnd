import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendprobperiodComponent } from './extendprobperiod.component';

describe('ExtendprobperiodComponent', () => {
  let component: ExtendprobperiodComponent;
  let fixture: ComponentFixture<ExtendprobperiodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendprobperiodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendprobperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
