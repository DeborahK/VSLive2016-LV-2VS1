System.register(['angular2/core', "./movie.service", './movieFilter.pipe', './movie-filter.component', './movie-headers.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movie_service_1, movieFilter_pipe_1, movie_filter_component_1, movie_headers_component_1;
    var MovieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            },
            function (movieFilter_pipe_1_1) {
                movieFilter_pipe_1 = movieFilter_pipe_1_1;
            },
            function (movie_filter_component_1_1) {
                movie_filter_component_1 = movie_filter_component_1_1;
            },
            function (movie_headers_component_1_1) {
                movie_headers_component_1 = movie_headers_component_1_1;
            }],
        execute: function() {
            MovieListComponent = (function () {
                function MovieListComponent(_movieService) {
                    this._movieService = _movieService;
                    this.pageTitle = "Movie List";
                    this.listFilter = "";
                    this.showImage = false;
                }
                MovieListComponent.prototype.ngOnInit = function () { this.getMovies(); };
                MovieListComponent.prototype.getMovies = function () {
                    this.movies = this._movieService.getMovies();
                };
                MovieListComponent.prototype.onChanged = function (filter) {
                    this.listFilter = filter;
                };
                MovieListComponent.prototype.onToggleImage = function (toggleImage) {
                    this.showImage = toggleImage;
                };
                MovieListComponent.prototype.convertToDate = function (dateString) {
                    return new Date(dateString);
                };
                MovieListComponent = __decorate([
                    core_1.Component({
                        selector: 'mh-movies',
                        templateUrl: 'app/movies/movie-list.component.html',
                        styleUrls: ['app/movies/movie-list.component.css'],
                        providers: [movie_service_1.MovieService],
                        pipes: [movieFilter_pipe_1.MovieFilterPipe],
                        directives: [movie_filter_component_1.MovieFilterComponent, movie_headers_component_1.MovieHeadersComponent]
                    }), 
                    __metadata('design:paramtypes', [movie_service_1.MovieService])
                ], MovieListComponent);
                return MovieListComponent;
            })();
            exports_1("MovieListComponent", MovieListComponent);
        }
    }
});
//# sourceMappingURL=movie-list.component.js.map