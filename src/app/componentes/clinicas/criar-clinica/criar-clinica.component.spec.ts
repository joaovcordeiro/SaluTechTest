import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarClinicaComponent } from './criar-clinica.component';

describe('CriarClinicaComponent', () => {
  let component: CriarClinicaComponent;
  let fixture: ComponentFixture<CriarClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
