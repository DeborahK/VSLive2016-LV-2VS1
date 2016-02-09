System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MovieRowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieRowComponent = (function () {
                function MovieRowComponent() {
                    this.showImage = false;
                }
                MovieRowComponent.prototype.convertToDate = function (dateString) {
                    return new Date(dateString);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MovieRowComponent.prototype, "showImage", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MovieRowComponent.prototype, "movie", void 0);
                MovieRowComponent = __decorate([
                    core_1.Component({
                        selector: 'mh-movierow',
                        template: "\n        <td>\n            <img [hidden]=\"!showImage || !movie.imageurl\" style=\"width:50px;margin:2px\" \n                    [src]=\"movie.imageurl\"\n                    [title]=\"movie.title\">\n        </td>\n        <td>{{ movie.title }}</td>\n        <td>{{ movie.director }}</td>\n        <td>{{ convertToDate(movie.releaseDate) | date}}</td>\n        <td>{{ movie.mpaa | uppercase}}</td>\n        <td>{{ movie.price | currency:'USD':true:'1.2'}}</td>\n        <td>{{ movie.starRating | number }} </td>\n        <td>{{ movie.approvalRating | percent: '1.0-0'}}</td>\n     "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieRowComponent);
                return MovieRowComponent;
            })();
            exports_1("MovieRowComponent", MovieRowComponent);
        }
    }
});
//# sourceMappingURL=movie-row.component.js.map