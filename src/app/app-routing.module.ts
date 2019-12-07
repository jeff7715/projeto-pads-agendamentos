import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { ConfirmarAgendamentoComponent } from './components/agendamento/confirmar-agendamento.component';


const routes: Routes = [
  {path: 'agendamento', component: AgendamentoComponent},
  {path: 'confirmar', component: ConfirmarAgendamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
