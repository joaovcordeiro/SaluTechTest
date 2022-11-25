import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClinicasComponent } from './componentes/clinicas/listar-clinicas/listar-clinicas.component';

const routes: Routes = [
  { path: '', redirectTo: 'clinicas', pathMatch: 'full' },
  { path: 'clinicas', component: ListarClinicasComponent },
  { path: 'agendamentos', component: ListarClinicasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
