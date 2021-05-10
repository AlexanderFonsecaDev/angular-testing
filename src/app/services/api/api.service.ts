import { Injectable } from '@angular/core';
import { LoginInterface } from '../../models/login.interface';
import { ResponseInterface } from '../../models/response.interface';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://api.solodata.es/';

  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginInterface): Observable<ResponseInterface>{
    const route = this.url + 'auth';
    return this.http.post<ResponseInterface>(route , {
      usuario : form.email,
      password : form.password
    });
  }

}
