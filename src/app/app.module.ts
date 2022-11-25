import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClinicasComponent } from './componentes/clinicas/listar-clinicas/listar-clinicas.component';
import { CriarClinicaComponent } from './componentes/clinicas/criar-clinica/criar-clinica.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ExcluirClinicaComponent } from './componentes/clinicas/excluir-clinica/excluir-clinica.component';
import { EditarClinicaComponent } from './componentes/clinicas/editar-clinica/editar-clinica.component';
import { ListarAgendamentosComponent } from './componentes/agendamentos/listar-agendamentos/listar-agendamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClinicasComponent,
    CabecalhoComponent,
    CriarClinicaComponent,
    ExcluirClinicaComponent,
    EditarClinicaComponent,
    ListarAgendamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
