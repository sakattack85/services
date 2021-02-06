import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child0Component } from './child0.component';

describe('Child0Component', () => {
  let component: Child0Component;
  let fixture: ComponentFixture<Child0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
