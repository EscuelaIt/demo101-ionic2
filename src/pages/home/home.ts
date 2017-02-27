import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Person } from '../../models/person.model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons: Person[] = [];

  constructor(public navCtrl: NavController) {
    let person = new Person('nicolas',23);
    let name = person.getName();
    console.log(name);

    let person2 = new Person('nicolas 2',23);
    let name2 = person.getName();
    console.log(name);

    this.persons.push(person);
    this.persons.push(person2);
  }

}
