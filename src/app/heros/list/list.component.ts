import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Soldier Boy'];
  heroDeleted: string = '';

  deleteHero() {
    this.heroDeleted = this.heros.shift() || '';
  }

}
