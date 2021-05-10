import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { LoginInterface } from '../../models/login.interface';
import { ResponseInterface } from '../../models/response.interface';

import Swal from 'sweetalert2';


import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor( private api: ApiService , private router: Router) {}

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(): void{
    if (localStorage.getItem('token')){
      this.router.navigate(['user']);
    }
  }

  sendCredentials(form: LoginInterface): void{
    this.api.loginByEmail(form).subscribe(data => {
      const result: ResponseInterface = data;
      if (result.status == 'ok'){
        localStorage.setItem('token' , result.result.token);
        this.router.navigate(['user']);
      }else{
        Swal.fire('Oops...', result.result.error_msg, 'error');
      }
    });
  }

}
