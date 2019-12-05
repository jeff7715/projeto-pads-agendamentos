import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Agendamento } from 'src/app/models/Agendamento';

@Component({
	selector: 'app-agendamento',
	templateUrl: './agendamento.component.html',
	styleUrls: [ './agendamento.component.css' ]
})
export class AgendamentoComponent implements OnInit {
	public agendamento: Agendamento;

	constructor() {
		this.agendamento = new Agendamento();
	}

	ngOnInit() {}

	cadastrar(form: NgForm) {
		console.log(this.agendamento);
	}
}
