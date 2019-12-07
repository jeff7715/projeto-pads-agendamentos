import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { ConfirmarAgendamentoComponent } from './components/agendamento/confirmar-agendamento.component';

@NgModule({
	declarations: [ AppComponent, AgendamentoComponent, ConfirmarAgendamentoComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
