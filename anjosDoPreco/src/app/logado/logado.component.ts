import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { Produto } from '../model/Produto';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

  userLogin: UserLogin = new UserLogin
  categoria: CategoriaModel = new CategoriaModel()
  listaCategoria: CategoriaModel[]
  produto: Produto = new Produto
  idCategoria: number
  user: Usuario = new Usuario()
  idUser = environment.id

  constructor(
    public auth: AuthService,
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=> {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
    

      this.router.navigate (['/index'])
    }, erro => {
      if (erro.status == 500){
        alert('Usuário ou senha estão incorretos :(')
      }
    })
  }

  cadastrarCategoria(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: CategoriaModel)=>{
      this.categoria = resp
      alert ("Categoria adicionada com sucesso!")
      this.categoria = new CategoriaModel()
    })
  }

  getAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[])=>{
      this.listaCategoria = resp 
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: CategoriaModel)=>{
      this.categoria = resp
    })
  }

  publicarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.postPostagem(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert('Produto cadastrado com sucesso!')
      this.produto = new Produto()
    })

  }
  
}
