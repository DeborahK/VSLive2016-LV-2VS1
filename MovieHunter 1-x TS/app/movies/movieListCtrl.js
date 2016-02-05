var app;
(function (app) {
    var movieList;
    (function (movieList) {
        // Controller class
        var MovieListCtrl = (function () {
            function MovieListCtrl(dataAccessService, pageTitle, showImage, message, movies) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.pageTitle = pageTitle;
                this.showImage = showImage;
                this.message = message;
                this.movies = movies;
                this.pageTitle = "Movie List";
                this.showImage = false;
                var movieResource = dataAccessService.getMovieResource();
                movieResource.query(function (data) {
                    _this.movies = data;
                });
            }
            MovieListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            MovieListCtrl.$inject = ["dataAccessService"];
            return MovieListCtrl;
        })();
        angular
            .module("movieHunter")
            .controller("MovieListCtrl", MovieListCtrl);
    })(movieList = app.movieList || (app.movieList = {}));
})(app || (app = {}));
