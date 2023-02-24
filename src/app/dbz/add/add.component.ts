import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pj } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  
  @Input()
  newPj: Pj = {
    name: '',
    power: 0
  };

  // Los outputs indican los eventos que emitira este componente, va a enviar un dato tipo Pj
  // @Output()
  // onNewPj: EventEmitter<Pj> = new EventEmitter();

  constructor(
    private dbzService: DbzService,
  ) {}

  add() {
    if( !this.newPj.name.trim().length ) return;

    // Envia este pj en el evento del component
    // this.onNewPj.emit( this.newPj );

    this.dbzService.addPj( this.newPj );

    this.newPj = { name: '', power: 0 };
  }
}
