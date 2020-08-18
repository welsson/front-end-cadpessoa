import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../_services/pessoa.service';
import { PessoaDTO } from '../core/PessoaDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.css']
})
export class ListPessoaComponent implements OnInit {
  pessoas: PessoaDTO[];
  errorMessage = '';

  constructor(private router: Router, private pessoaService: PessoaService) { }


  ngOnInit() {
    this.pessoaService.getPessoas()
    .subscribe( pessoas => {
      this.pessoas = pessoas;
    }, error => {
      this.errorMessage = error.message;
    });
  }

  deletePessoa(pessoa: PessoaDTO): void {
    this.pessoaService.deletePessoa(pessoa.id)
      .subscribe(pessoas => {
        this.pessoas = this.pessoas.filter(u => u !== pessoa);
      });
  }


}
