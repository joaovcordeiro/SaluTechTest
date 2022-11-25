import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClinicasComponent } from './listar-clinicas.component';

describe('ListarClinicasComponent', () => {
  let component: ListarClinicasComponent;
  let fixture: ComponentFixture<ListarClinicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarClinicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
