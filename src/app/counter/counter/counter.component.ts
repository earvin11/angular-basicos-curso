import { Component } from  '@angular/core'


@Component({
    selector: 'app-counter',
    template: `

        <h1>{{ title }}</h1>
        <strong>Base: {{ base }}</strong>
        <br>
    
        <button (click)="handleCount(base)">+ {{ base }}</button>
    
        <span>{{ count }}</span>
    
        <button (click)="handleCount(-base)">- {{ base }}</button>


    `
})
export class CounterComponent {
    title: string = 'Counter App';
    count: number = 0;
    base: number = 5;

    handleCount( value: number ) {
        this.count += value;
    }
}