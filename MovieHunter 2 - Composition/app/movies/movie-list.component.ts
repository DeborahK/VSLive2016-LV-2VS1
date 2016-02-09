import {Component, OnInit}  from 'angular2/core';

import {IMovie} from './movie';
import {MovieService} from "./movie.service"
import {MovieFilterPipe} from './movieFilter.pipe';
import {MovieFilterComponent} from './movie-filter.component';
import {MovieHeadersComponent} from './movie-headers.component';

@Component({
    selector: 'mh-movies',
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css'],
    providers: [MovieService],
    pipes: [MovieFilterPipe],
    directives: [MovieFilterComponent, MovieHeadersComponent]
})
export class MovieListComponent implements OnInit {
    pageTitle: string = "Movie List";
    listFilter: string = "";
    showImage: boolean = false;
    movies: IMovie[];
    errorMessage: string;

    constructor(private _movieService: MovieService) {
    }

    ngOnInit() { this.getMovies(); }

    getMovies() {
        this.movies = this._movieService.getMovies();
    }
    
    onChanged(filter) {
        this.listFilter = filter;
    }
    
    onToggleImage(toggleImage) {
        this.showImage = toggleImage;
    }

    convertToDate(dateString): Date {
        return new Date(dateString);
    }
}