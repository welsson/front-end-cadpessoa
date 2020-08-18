import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditPessoaComponent } from './pessoa/edit-pessoa.component';
import { ListPessoaComponent } from './pessoa/list-pessoa.component';
import { AddPessoaComponent } from './pessoa/add-pessoa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-pessoa/:id', component: EditPessoaComponent },
  { path: 'add-pessoa', component: AddPessoaComponent},
  { path: 'pessoa', component: ListPessoaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
