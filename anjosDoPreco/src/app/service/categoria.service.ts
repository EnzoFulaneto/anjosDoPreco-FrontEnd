import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../model/CategoriaModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategoria(): Observable<CategoriaModel[]>{
    return this.http.get<CategoriaModel[]>('http://localhost:8080/categorias')
  }

  postCategoria(categoria: CategoriaModel): Observable<CategoriaModel>{
    return this.http.post<CategoriaModel>('http://localhost:8080/categorias', categoria)
  }
}
