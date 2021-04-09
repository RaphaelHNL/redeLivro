import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { EmailValidator } from '@angular/forms';
import { DadosService, Login } from '../dados.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})


export class HomepageComponent implements OnInit {

  categories: any = [];
  biografia: any = [];
  fiction: any = [];
  color: any;


  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dados();
    this.setClass();
  }

  dados() {
    this.dadosService.dados()
      .subscribe((dado: any) => {
        this.biografia.push(dado[4], dado[5], dado[6], dado[7], dado[8], dado[9], dado[10], dado[11], dado[12], dado[13])
        this.fiction.push(dado[0], dado[1], dado[2], dado[3])
      })
  }

  setClass() {
    const { age, degree, frequency, eyesight, deficiency } = this.dadosService.user;
    if (frequency === 'ALWAYS' && eyesight === 'PERFECT' && deficiency === 'nenhuma' && degree === 5) {
      this.color = 'caseOne'
    }
    if (frequency === 'ALWAYS' && eyesight === 'SENSITIVITY' && deficiency === 'nenhuma' && degree === 5) {
      this.color = 'caseTwo'
    }
    if (frequency === 'ALWAYS' && deficiency === 'daltonic') {
      this.color = 'caseThree'
    }
    if (frequency === 'ALWAYS' && eyesight === 'SENSITIVITY' && deficiency === 'daltonic') {
      this.color = 'caseFour'
    }
    if (eyesight === 'GLASSES' && ['astigma', 'hipermetropia'].includes(deficiency) && age >= 50) {
      this.color = 'caseFive'
    }
    if (eyesight === 'SENSITIVITY' && ['astigma', 'hipermetropia'].includes(deficiency) && age >= 50) {
      this.color = 'caseSix'
    }
    if (eyesight === 'GLASSES' && deficiency === 'daltonic' && age >= 50) {
      this.color = 'caseSeven'
    }
    if (eyesight === 'SENSITIVITY' && deficiency === 'daltonic' && age >= 50) {
      this.color = 'caseEight'
    }
  }

}
