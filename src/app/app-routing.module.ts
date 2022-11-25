import { ListarAgendamentosComponent } from './componentes/agendamentos/listar-agendamentos/listar-agendamentos.component';
import { CriarClinicaComponent } from './componentes/clinicas/criar-clinica/criar-clinica.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClinicasComponent } from './componentes/clinicas/listar-clinicas/listar-clinicas.component';
import { ExcluirClinicaComponent } from './componentes/clinicas/excluir-clinica/excluir-clinica.component';
import { EditarClinicaComponent } from './componentes/clinicas/editar-clinica/editar-clinica.component';

const routes: Routes = [
  { path: '', redirectTo: 'clinicas', pathMatch: 'full' },
  { path: 'clinicas', component: ListarClinicasComponent },
  { path: 'agendamentos', component: ListarAgendamentosComponent },
  { path: 'criar', component: CriarClinicaComponent },
  { path: 'excluir/:id', component: ExcluirClinicaComponent },
  { path: 'editar/:id', component: EditarClinicaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
