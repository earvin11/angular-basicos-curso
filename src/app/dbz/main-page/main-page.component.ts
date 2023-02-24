import { Component } from '@angular/core';
import { Pj } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor() {}

  newPj: Pj = {
    name: "Roshi",
    power: 1000
  }

 
}
