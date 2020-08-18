import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PessoaDTO } from '../core/PessoaDTO';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../_services/pessoa.service';
import { Validacao} from '../../assets/scripts/validacao';
import Swal from 'node_modules/sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.component.html',
  styleUrls: ['./add-pessoa.component.scss']
})
export class AddPessoaComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  isCpfInvalido = false;
  errorMessage = '';
  pessoa = new PessoaDTO();

  constructor(private route: ActivatedRoute,
              private pessoaService: PessoaService,
              private location: Location,
              private validacao: Validacao) { }
  ngOnInit() {

  }

  insert(): void {
    if (!this.validacao.isValidDate(this.form.dataNascimento)) {
      Swal.fire({
      text: 'Data inválida!',
      icon: 'warning'
      });
      return;
    }
    if (!this.validacao.validaCpf(this.form.cpf)) {
      Swal.fire({
      text: 'CPF inválido!',
      icon: 'warning'
      });
      return;
    }
    this.pessoaService.insertPessoa(this.form).subscribe(pessoa => {
      this.pessoa = pessoa;
      if (pessoa === null) {
          Swal.fire({
          text: 'Pessoa não incluída, CPF já cadastrado!',
          icon: 'warning'
          });
          return;
      }
      this.goBack();
    }, error => {
      this.errorMessage = error.message;
    });
  }

  goBack() {
    this.location.back();
  }


}
