import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PessoaDTO } from '../core/PessoaDTO';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../_services/pessoa.service';

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html',
  styleUrls: ['./edit-pessoa.component.scss']
})
export class EditPessoaComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  pessoa = new PessoaDTO();
  idPessoa: string;

  constructor(private route: ActivatedRoute,
              private pessoaService: PessoaService,
              private location: Location) { }
  ngOnInit() {


    this.idPessoa = this.route.snapshot.paramMap.get('id');
    if (this.idPessoa != null) {
    this.pessoaService.getPessoaById(this.idPessoa).subscribe(pessoa => {
      this.pessoa = pessoa;
      console.log('Retornou usuário com sucesso! ');
    }, error => {
      this.errorMessage = error.message;
    });
  }


  }

  update(): void {
    this.pessoa.id = this.idPessoa;
    this.pessoaService.updatePessoa(this.pessoa).subscribe(() => {
      this.goBack();
    }, error => {
      console.log('Error ao atualizar a pessoa! ', error);
    });
  }

  goBack() {
    this.location.back();
  }

}
