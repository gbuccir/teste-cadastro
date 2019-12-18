

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


  ngOnInit() {
    this.buscarPhotos();
    this.buscarAlbuns();
    this.buscarPosts();
    this.buscarUsers();
  }

  buscarUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(data => {
      this.users = data;
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

  buscarPhotos() {
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data => {
      this.photos = data;
      // this.users.photos = this.photos.filter( photo => )
      console.log("photos");
      console.log(this.photos);
    },
      err => {
        console.log(err);
      })
  }

  buscarAlbuns() {
    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe(data => {
      this.albuns = data;
      console.log("albuns");

      console.log(this.albuns);
    },
      err => {
        console.log(err);
      })
  }

  buscarPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      this.posts = data;
      console.log("posts");
      console.log(this.posts);
    },
      err => {
        console.log(err);
      })
  }


}