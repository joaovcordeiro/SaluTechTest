import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirClinicaComponent } from './excluir-clinica.component';

describe('ExcluirClinicaComponent', () => {
  let component: ExcluirClinicaComponent;
  let fixture: ComponentFixture<ExcluirClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
