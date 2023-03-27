import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refresh1Component } from './refresh1.component';

describe('Refresh1Component', () => {
  let component: Refresh1Component;
  let fixture: ComponentFixture<Refresh1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Refresh1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Refresh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
