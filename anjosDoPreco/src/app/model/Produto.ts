
//Criando classe produto 

import { CategoriaModel } from "./CategoriaModel"

export class Produto{
    public id: number 
    public produto: string
    public preco: number 
    public marca: string
    public categoria: CategoriaModel[]
}