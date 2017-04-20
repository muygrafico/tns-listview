"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.photos = [
            {
                title: 'hola',
                thumbnailUrl: 'http://www.imagenesdeamor.pro/wp-content/uploads/2015/11/Imagenes-de-perritos-con-frases-10.jpg',
                url: 'http://placehold.it/150/30ac17'
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getPhotos();
    };
    AppComponent.prototype.getPhotos = function () {
        var _this = this;
        this.http.get('https://jsonplaceholder.typicode.com/photos')
            .map(function (res) { return res.json(); })
            .subscribe(function (photos) {
            _this.photos = photos.map(function (item) {
                item.thumbnailUrl = item.thumbnailUrl.split('/')[4];
                item.thumbnailUrl = "https://placeholdit.imgix.net/~text?bg=" + item.thumbnailUrl + "&txt=150%C3%97150&w=150&h=150";
                return item;
            });
            console.log(_this.photos.length);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: 'app.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFtRTtBQUNuRSxzQ0FBb0M7QUFDcEMsaUNBQStCO0FBTy9CLElBQWEsWUFBWTtJQVd2QixzQkFDUyxJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVZaLFdBQU0sR0FBVTtZQUNyQjtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixZQUFZLEVBQUUsaUdBQWlHO2dCQUMvRyxHQUFHLEVBQUUsZ0NBQWdDO2FBQ3RDO1NBRUYsQ0FBQztJQUlBLENBQUM7SUFFSCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxnQ0FBUyxHQUFqQjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUM7YUFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixTQUFTLENBQUMsVUFBQyxNQUFhO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcseUNBQXlDLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRSwrQkFBK0IsQ0FBQztnQkFDbkgsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsVUFBVTtRQUN2QixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQWFlLFdBQUk7R0FaUixZQUFZLENBZ0N4QjtBQWhDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBwaG90b3M6IGFueVtdID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnaG9sYScsXG4gICAgICB0aHVtYm5haWxVcmw6ICdodHRwOi8vd3d3LmltYWdlbmVzZGVhbW9yLnByby93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9JbWFnZW5lcy1kZS1wZXJyaXRvcy1jb24tZnJhc2VzLTEwLmpwZycsXG4gICAgICB1cmw6ICdodHRwOi8vcGxhY2Vob2xkLml0LzE1MC8zMGFjMTcnXG4gICAgfVxuXG4gIF07XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaHR0cDogSHR0cFxuICApe31cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZ2V0UGhvdG9zKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFBob3Rvcygpe1xuICAgIHRoaXMuaHR0cC5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9waG90b3MnKVxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnN1YnNjcmliZSgocGhvdG9zOiBhbnlbXSkgPT57XG4gICAgICB0aGlzLnBob3RvcyA9IHBob3Rvcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0udGh1bWJuYWlsVXJsID0gaXRlbS50aHVtYm5haWxVcmwuc3BsaXQoJy8nKVs0XTtcbiAgICAgICAgaXRlbS50aHVtYm5haWxVcmwgPSBcImh0dHBzOi8vcGxhY2Vob2xkaXQuaW1naXgubmV0L350ZXh0P2JnPVwiICsgaXRlbS50aHVtYm5haWxVcmwgK1wiJnR4dD0xNTAlQzMlOTcxNTAmdz0xNTAmaD0xNTBcIjtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGhvdG9zLmxlbmd0aCk7XG4gICAgfSlcbiAgfVxuXG59XG4iXX0=