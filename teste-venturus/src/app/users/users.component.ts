

import { Component, OnInit } from '@angular/core';
import { faHome, faPuzzlePiece, faTrophy, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  faHome = faHome
  faPuzzlePiece = faPuzzlePiece;
  faTrophy = faTrophy;
  faMapSigns = faMapSigns;
  public users;
  public albuns;
  public photos;
  public posts;
  public pesquisa;
private usersAux;

  ngOnInit() {
    this.buscarPosts();
    this.buscarAlbuns();
    // this.buscarPhotos();
    // this.buscarUsers();
  }

  filterFunction() {
    console.log(this.users);
    console.log(this.pesquisa);
    if (this.pesquisa !== '')
      this.users = this.users.filter(i => i.name.includes(this.pesquisa) || i.username.includes(this.pesquisa));
else 
this.users = this.usersAux;
  }



  buscarUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(data => {
      this.users = data;
      this.usersAux = this.users;
      console.log(this.users);

      this.users.forEach(element => {

        this.users.posts = this.posts.filter(post => post.userId == element.id);
        this.users.albuns = this.albuns.filter(albun => albun.userId == element.id);

        this.albuns.forEach(alb => {
          this.users.photos = this.photos.filter(photo => photo.albumId == alb.id);
        });
      });

    },
      err => {
        console.log(err);
      })
  }

  async buscarPhotos() {
    let retorno = null;
    try {
      retorno = await this.http.get("https://jsonplaceholder.typicode.com/photos").toPromise();
      this.photos = retorno;
      this.buscarUsers();
    } catch{
      console.log("nao chamaou api");
      retorno = false;
    }
    // this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data => {
    //   this.photos = data;
    //   // this.users.photos = this.photos.filter( photo => )
    //   console.log("photos");
    //   console.log(this.photos);
    // },
    // err => {
    //   console.log(err);
    // })
  }

  async buscarAlbuns() {
    let retorno;
    try {
      retorno = await this.http.get("https://jsonplaceholder.typicode.com/albums").toPromise();
      this.albuns = retorno;
      this.buscarPhotos();
    } catch{
      console.log("nao chamaou api");
      retorno = false;
    }
    //    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe(data => {
    //   this.albuns = data;
    //   console.log("albuns");

    //   console.log(this.albuns);
    // },
    //   err => {
    //     console.log(err);
    //   })
  }

  async buscarPosts() {
    let retorno;
    try {
      retorno = await this.http.get("https://jsonplaceholder.typicode.com/posts").toPromise();
      this.posts = retorno;
    } catch{
      console.log("nao chamaou api");
      retorno = false;
    }
    // this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
    //   this.posts = data;
    //   console.log("posts");
    //   console.log(this.posts);
    // },
    //   err => {
    //     console.log(err);
    //   })
  }


}