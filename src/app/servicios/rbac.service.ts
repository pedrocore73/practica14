import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RbacService {

  constructor(private http: HttpClient) { }

  login(credenciales) {
    return this.http.post('http://localhost:3000/login', credenciales).pipe(
      map((res: any)=>{
        console.log(res);
        return res;
      })
    )
  }

}
