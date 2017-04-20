import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: "my-app",
  templateUrl: 'app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public photos: any[] = [
    {
      title: 'hola',
      thumbnailUrl: 'http://www.imagenesdeamor.pro/wp-content/uploads/2015/11/Imagenes-de-perritos-con-frases-10.jpg',
      url: 'http://placehold.it/150/30ac17'
    }

  ];
  
  constructor(
    public http: Http
  ){}

  ngOnInit(){
    this.getPhotos();
  }

  private getPhotos(){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(res => res.json())
    .subscribe((photos: any[]) =>{
      this.photos = photos.map(item => {
        item.thumbnailUrl = item.thumbnailUrl.split('/')[4];
        item.thumbnailUrl = "https://placeholdit.imgix.net/~text?bg=" + item.thumbnailUrl +"&txt=150%C3%97150&w=150&h=150";
        return item;
      });
      console.log(this.photos.length);
    })
  }

}
