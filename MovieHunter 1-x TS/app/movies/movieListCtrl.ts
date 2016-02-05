module app.movieList { 

    // Interface defining the properties and methods
    // that the controller class intents to provide
    interface IMovieListModel {
        pageTitle: string;
        showImage: boolean;
        message: string;
        movies: app.domain.IMovie[];
        toggleImage(): void;
    }

    // Controller class
    class MovieListCtrl implements IMovieListModel {

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService,
                    public pageTitle: string,
                    public showImage: boolean,
                    public message: string,
                    public movies: app.domain.IMovie[]) {
                
                this.pageTitle = "Movie List";
                this.showImage = false;
                var movieResource = dataAccessService.getMovieResource();
                movieResource.query((data: app.domain.IMovie[]) => {
                    this.movies = data;
                });
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }

    angular
        .module("movieHunter")
        .controller("MovieListCtrl",
        MovieListCtrl)
}