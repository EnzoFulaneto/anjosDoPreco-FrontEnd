import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AlimentosComponent } from './categorias/alimentos/alimentos.component';
import { EntrarComponent } from './entrar/entrar.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},

  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'index', component: IndexComponent},
  {path: 'alimentos', component:AlimentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
