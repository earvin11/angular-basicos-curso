import { Component, Input } from '@angular/core';

import { Pj } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  // el decorador Input indica las propiedades recibidas del componente padre
  // @Input()
  // personajes: Pj[] = []

  constructor(
    private dbzService: DbzService
  ) {}

  get personajes() {
    return this.dbzService.personajes;
  }
}
 