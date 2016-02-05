var app;
(function (app) {
    var domain;
    (function (domain) {
        var Movie = (function () {
            function Movie(approvalRating, director, imageurl, movieId, mpaa, price, releaseDate, starRating, title) {
                this.approvalRating = approvalRating;
                this.director = director;
                this.imageurl = imageurl;
                this.movieId = movieId;
                this.mpaa = mpaa;
                this.price = price;
                this.releaseDate = releaseDate;
                this.starRating = starRating;
                this.title = title;
            }
            return Movie;
        })();
        domain.Movie = Movie;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
