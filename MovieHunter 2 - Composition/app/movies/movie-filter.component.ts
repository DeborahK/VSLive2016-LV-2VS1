import {Component, Input, Output, EventEmitter}  from 'angular2/core';

@Component({
    selector: 'mh-moviefilter',
    template: `
      <div class="col-md-2">Filter by:</div>
      <div class="col-md-4">
        <input type="text" [(ngModel)]="movieFilter" (keyup)="onKeyUp()" />
      </div>
    `
})
export class MovieFilterComponent {
    movieFilter: string = "";
    @Output() changed : EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }
    
    onKeyUp() {
        this.changed.emit(this.movieFilter);
    }
}