import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoaDTO } from '../core/PessoaDTO';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const PESSOA_API = 'https://cadpessoa-app.herokuapp.com/api/pessoas';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  pessoas: PessoaDTO[];
  httpClient: any;

  constructor(private http: HttpClient,
              private router: Router) { }

  getPessoas(): Observable<any> {
    return this.http.get(PESSOA_API, httpOptions);
  }

  deletePessoa(id: string): Observable<any> {
    return this.http.delete(PESSOA_API + '/' + id, httpOptions);
  }

  editPessoa(pessoa: PessoaDTO): void {
    window.localStorage.removeItem('editPessoaId');
    window.localStorage.setItem('editPessoaId', pessoa.id);
    this.router.navigate(['edit-pessoa']);
  }

  getPessoaById(id: string): Observable<any> {
    return this.http.get(PESSOA_API + '/' + id);
  }

  updatePessoa(pessoa: PessoaDTO): Observable<any> {
    return this.http.put(PESSOA_API + '/' + pessoa.id, pessoa, httpOptions);
  }

  insertPessoa(pessoa: PessoaDTO): Observable<any> {
    return this.http.post(PESSOA_API, pessoa, httpOptions);
  }


}
