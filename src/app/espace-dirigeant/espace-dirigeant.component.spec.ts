import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceDirigeantComponent } from './espace-dirigeant.component';

describe('EspaceDirigeantComponent', () => {
  let component: EspaceDirigeantComponent;
  let fixture: ComponentFixture<EspaceDirigeantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceDirigeantComponent]
    });
    fixture = TestBed.createComponent(EspaceDirigeantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
