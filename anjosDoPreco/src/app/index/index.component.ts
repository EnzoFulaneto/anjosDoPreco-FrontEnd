import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  listaProdutos: Produto[]

  constructor(
    private produtoService: ProdutoService,
  ) { }

  ngOnInit() {
    this.getAllProdutos
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }

  getProdutoByCategoria(){
    
  }

}
