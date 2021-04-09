import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  meuFormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })

  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.dadosService.login(this.meuFormGroup.value)
      .subscribe(logar => {
        this.dadosService._user = logar;
        this.meuFormGroup.reset();
        setTimeout(() => this.router.navigateByUrl('/home'), 300);
      },
        error => {
          alert('Email ou senha inválido.')
        })
  }

}
