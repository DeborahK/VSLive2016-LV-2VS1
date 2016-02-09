import {Component, Output, EventEmitter}  from 'angular2/core';

@Component({
    selector: 'mh-movieheaders',
    template: `
        <thead>
            <tr>
                <td>
                    <button type="button" class="btn btn-info" (click)="onClick()">
                        {{showImage ? "Hide" : "Show"}} Poster
                    </button>
                </td>
                <td>Title</td>
                <td>Director</td>
                <td>Release Date</td>
                <td>MPAA Rating</td>
                <td>DVD Price</td>
                <td>5 Star Rating</td>
                <td>Audience Approval</td>
            </tr>
        </thead>
     `
})
export class MovieHeadersComponent {
    showImage: boolean = false;
    @Output() toggleImage : EventEmitter<boolean> = new EventEmitter<boolean>();
   
    constructor() {
    }
    
    onClick(): void {
        this.showImage = !this.showImage;
        this.toggleImage.emit(this.showImage);
    }
}