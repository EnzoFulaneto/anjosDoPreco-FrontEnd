import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<CategoriaModel[]>{
    return this.http.get<CategoriaModel[]>('http://localhost:8080/categorias', this.token)
  }

  getByIdCategoria(id: number): Observable<CategoriaModel>{
    return this.http.get<CategoriaModel>(`http://localhost:8080/categorias/${id}`, this.token)
  }

  postCategoria(categoria: CategoriaModel): Observable<CategoriaModel>{
    return this.http.post<CategoriaModel>('http://localhost:8080/categorias', categoria, this.token)
  }
}
