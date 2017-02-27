import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Person } from '../../models/person.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    let person1 = new Person('nicolas', 23);
    let name = person1.getName();
    console.log(name);
  }

}
