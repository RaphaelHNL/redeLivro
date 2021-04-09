import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cadastro {
  name: string,
  email: string,
  password: string,
  degree: number,
  frequency: string,
  eyesight: string,
  deficiency: string,
  birthDate: Date;
}

export interface Login {
  email: string,
  password: string,
  name: string,
}

const urlBase = 'https://ampdqh14xc.execute-api.sa-east-1.amazonaws.com/dev/api';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  _user: any;

  get user() {
    return this._user;
  }

  set user(user) {
    this.user = user;
  }

  constructor(private http: HttpClient) { }

  login(logar: Login) {
    return this.http.post<Login>(`${urlBase}/user/login`, logar)
  }

  cadastro(cadastro: Cadastro) {
    return this.http.post<Cadastro>(`${urlBase}/user/register`, cadastro)
  }

  dados() {
    return this.http.get(`${urlBase}/books`);
  }
}
