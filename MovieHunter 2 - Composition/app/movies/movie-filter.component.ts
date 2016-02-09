import {Component, Output, EventEmitter}  from 'angular2/core';

@Component({
    selector: 'mh-moviefilter',
    template: `
      <div class="row">
        <div class="col-md-2">Filter by:</div>
        <div class="col-md-4">
            <input type="text" [(ngModel)]="movieFilter" (keyup)="onKeyUp()" />
        </div>
      </div>
      <div class="row" [hidden]="!movieFilter">
        <div class="col-md-6">
            <h3>Movies filtered by: {{movieFilter}}</h3>
        </div>
      </div>
      <br/>
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