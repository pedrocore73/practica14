import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlUsuarios = environment.urlUsuarios;

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(this.urlUsuarios).pipe(
      map((res: any)=>{
        return res;
      })
    )
  }

}
