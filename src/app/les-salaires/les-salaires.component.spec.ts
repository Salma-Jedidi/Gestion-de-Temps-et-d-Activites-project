import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesSalairesComponent } from './les-salaires.component';

describe('LesSalairesComponent', () => {
  let component: LesSalairesComponent;
  let fixture: ComponentFixture<LesSalairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LesSalairesComponent]
    });
    fixture = TestBed.createComponent(LesSalairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
