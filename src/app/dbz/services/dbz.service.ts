import { Injectable } from '@angular/core'
import { Pj } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {

    private _personajes: Pj[] = [
        {
          name: 'Goku',
          power: 15000
        },
        {
          name: 'Vegeta',
          power: 8000
        }
    ];

    get personajes(): Pj[] {
        return [...this._personajes];
    }

    constructor() {}

    addPj( data: Pj ) {
        this._personajes.push( data );
    }

}