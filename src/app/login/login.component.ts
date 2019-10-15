import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RbacService } from '../servicios/rbac.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  logged: boolean;

  constructor(private ff: FormBuilder,
              private rbacService: RbacService) { }

  ngOnInit() {
    this.formLogin = this.ff.group({
      email: '',
      password: ''
    })
    this.logged = this.rbacService.isLogged();
    console.log(this.logged);
  }

  sendLogin() {
    const auth = {
      email: this.formLogin.get('email').value,
      password: this.formLogin.get('password').value
    }
    console.log(auth);
    
  }

}
