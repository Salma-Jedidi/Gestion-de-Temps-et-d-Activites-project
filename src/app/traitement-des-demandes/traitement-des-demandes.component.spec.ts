import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementDesDemandesComponent } from './traitement-des-demandes.component';

describe('TraitementDesDemandesComponent', () => {
  let component: TraitementDesDemandesComponent;
  let fixture: ComponentFixture<TraitementDesDemandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraitementDesDemandesComponent]
    });
    fixture = TestBed.createComponent(TraitementDesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
