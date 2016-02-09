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
    var MovieHeadersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieHeadersComponent = (function () {
                function MovieHeadersComponent() {
                    this.showImage = false;
                    this.toggleImage = new core_1.EventEmitter();
                }
                MovieHeadersComponent.prototype.onClick = function () {
                    this.showImage = !this.showImage;
                    this.toggleImage.emit(this.showImage);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MovieHeadersComponent.prototype, "toggleImage", void 0);
                MovieHeadersComponent = __decorate([
                    core_1.Component({
                        selector: 'mh-movieheaders',
                        template: "\n        <tr>\n            <td>\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"onClick()\">\n                    {{showImage ? \"Hide\" : \"Show\"}} Poster\n                </button>\n            </td>\n            <td>Title</td>\n            <td>Director</td>\n            <td>Release Date</td>\n            <td>MPAA Rating</td>\n            <td>DVD Price</td>\n            <td>5 Star Rating</td>\n            <td>Audience Approval</td>\n        </tr>\n     ",
                        styleUrls: ['app/movies/movie-headers.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieHeadersComponent);
                return MovieHeadersComponent;
            })();
            exports_1("MovieHeadersComponent", MovieHeadersComponent);
        }
    }
});
//# sourceMappingURL=movie-headers.component.js.map