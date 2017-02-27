import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  twitter: string = '@nicobytes';
  @ViewChild('myVar') myVar: HTMLElement;
  numbers: number[] = [1,2,3,4,5,7];

  constructor(public navCtrl: NavController) {}

  showAlert(){
    alert('Hola');
  }

  changeDom(){
    this.myVar.innerHTML = 'hola universo.';
  }

  addNumber(){
    this.numbers.push(2);
  }

  removeNumber(){
    this.numbers.splice(0,1);
  }

}
