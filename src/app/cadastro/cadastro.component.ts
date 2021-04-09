import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {

  meuFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    degree: new FormControl('', Validators.required),
    frequency: new FormControl('', Validators.required),
    eyesight: new FormControl('', Validators.required),
    deficiency: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
  })

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
  }

  cadastro() {
    this.dadosService.cadastro(this.meuFormGroup.value)
      .subscribe(cadastro => {
        console.log(cadastro)
        this.meuFormGroup.reset();
        alert('Cadastro realizado com sucesso')
      },
        error => {
          alert('Não foi possivel realizar o cadastro')
        })
  }

}
