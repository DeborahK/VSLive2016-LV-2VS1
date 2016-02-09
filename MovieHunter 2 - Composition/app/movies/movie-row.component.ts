import {Component, Input}  from 'angular2/core';
import {IMovie} from './movie';

@Component({
    selector: 'mh-movierow',
    template: `
        <td>
            <img [hidden]="!showImage || !movie.imageurl" style="width:50px;margin:2px" 
                    [src]="movie.imageurl"
                    [title]="movie.title">
        </td>
        <td>{{ movie.title }}</td>
        <td>{{ movie.director }}</td>
        <td>{{ convertToDate(movie.releaseDate) | date}}</td>
        <td>{{ movie.mpaa | uppercase}}</td>
        <td>{{ movie.price | currency:'USD':true:'1.2'}}</td>
        <td>{{ movie.starRating | number }} </td>
        <td>{{ movie.approvalRating | percent: '1.0-0'}}</td>
     `
})
export class MovieRowComponent {
    @Input() showImage: boolean = false;
    @Input() movie: IMovie;
    
    convertToDate(dateString): Date {
        return new Date(dateString);
    }
}