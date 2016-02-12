import {Component, OnInit}  from 'angular2/core';

import {FilterEntryComponent} from '../shared/filter-entry.component';
import {StarComponent} from "../shared/star.component";

import {IMovie} from './movie';
import {MovieService} from './movie.service';
import {MovieFilterPipe} from './movieFilter.pipe';

@Component({
    selector: 'mh-movies',
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css'],
    directives: [FilterEntryComponent,
                StarComponent],
    providers: [MovieService],
    pipes: [MovieFilterPipe]
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

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    onFilterChanged(filter) {
        this.listFilter = filter;
    }
    
    convertToDate(dateString): Date {
        return new Date(dateString);
    }
}