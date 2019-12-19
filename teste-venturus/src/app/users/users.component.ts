

import { Component, OnInit } from '@angular/core';
import { faHome, faPuzzlePiece, faTrophy, faMapSigns, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../service/userservice.service';
import { GroupRide } from '../enum/group-ride.enum';
import { Days } from '../enum/days.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient, private userService: UserserviceService) { }

  faHome = faHome
  faPuzzlePiece = faPuzzlePiece;
  faTrophy = faTrophy;
  faMapSigns = faMapSigns;
  faTrashAlt = faTrashAlt;
  public users;
  public albuns;
  public photos;
  public posts;
  public pesquisa;
  private usersAux;

  ngOnInit() {
    this.buscarPosts();
    this.buscarAlbuns();
  }

  filterFunction() {
    if (this.pesquisa !== '')
      this.users = this.users.filter(i => i.name.includes(this.pesquisa) || i.username.includes(this.pesquisa));
    else
      this.users = this.usersAux;
  }

  removerElemento(usuario) {
    var r = confirm("Delete user?");
    if (r == true) {
      let user = this.users.find(user => user.id === usuario.id);
      this.users.splice(this.users.indexOf(user), 1)
    }
  }


  buscarUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(data => {
      this.users = data;
      this.usersAux = this.users;
      console.log(this.users);

      let novoUser = this.userService.getNewUser();
      if (!this.userService.nullOrUndef(novoUser))
        this.users.push(novoUser);

      this.users.forEach(element => {

        element.posts = this.posts.filter(post => post.userId == element.id);
        element.albuns = this.albuns.filter(albun => albun.userId == element.id);

        this.albuns.forEach(alb => {
          element.photos = this.photos.filter(photo => photo.albumId == alb.id);
        });

        element.group = this.buscarGroup(element.group);
        element.days = this.buscarDays(element.days);
      });




      console.log(this.users);
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

  buscarGroup(userGroup) {
    let num = null;

    if (this.userService.nullOrUndefOrEmpty(userGroup)) {
      num = Math.floor(Math.random() * 3);
    }
    else
      num = userGroup;

    let txt = "";
    if (num == GroupRide.Always)
      txt = "always";
    else if (num == GroupRide.Sometimes)
      txt = "sometimes";
    else
      txt = "never";

    return txt;
  }

  buscarDays(days) {
    let num = [];
    let txt = "";
    if (this.userService.nullOrUndefOrEmpty(days)) {
      num.push(Math.floor(Math.random() * 7));
    }
    else
      num = days;

    for (let i = 0; i < num.length; i++) {
      switch (num[i]) {
        case Days.Sunday: {
          txt += "Sun,"
          break;
        }
        case Days.Monday: {
          txt += "Mon,"
          break;
        }
        case Days.Tuesday: {
          txt += "Tue,"
          break;
        }
        case Days.Wednesday: {
          txt += "Wed,"
          break;
        }
        case Days.Thursday: {
          txt += "Thu,"
          break;
        }
        case Days.Friday: {
          txt += "Fri,"
          break;
        }
        case Days.Saturday: {
          txt += "Sat,"
          break;
        }
      }

    }
    return txt;
  }

}