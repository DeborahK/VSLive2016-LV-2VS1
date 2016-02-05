module app.domain {
    export interface IMovie {
        approvalRating: number;
        director: string;
        imageurl: string;
        movieId: number;
        mpaa: string;
        price: number;
        releaseDate: string;
        starRating: number;
        title: string;
    }

    export class Movie implements IMovie {
        constructor(public approvalRating: number,
                    public director: string,
                    public imageurl: string,
                    public movieId: number,
                    public mpaa: string,
                    public price: number,
                    public releaseDate: string,
                    public starRating: number,
                    public title: string) {
        }
    }
}