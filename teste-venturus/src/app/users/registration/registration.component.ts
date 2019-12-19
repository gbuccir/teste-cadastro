import { Component, OnInit } from '@angular/core';
import { faLifeRing, faHeartbeat, faSmile } from '@fortawesome/free-solid-svg-icons';
import { UserserviceService } from 'src/app/service/userservice.service';
import { Users } from 'src/app/classes/users';
import { Days } from 'src/app/enum/days.enum';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private usersService: UserserviceService) { }

  faLifeRing = faLifeRing;
  faHeartbeat = faHeartbeat;
  faSmile = faSmile;

  public daysEnum = Days;
  public novoRegistro = new Users();
  public sunday; saturday; friday; wednesday; tuesday; monday; thursday;

  ngOnInit() {
    this.novoRegistro.days = [];
  }

  saveRegistro() {
    try {
      if (this.usersService.nullOrUndefOrEmpty(this.novoRegistro.username))
        throw "Invalid Username";
      if (this.usersService.nullOrUndefOrEmpty(this.novoRegistro.name))
        throw "Fill name field";
      if (this.usersService.nullOrUndefOrEmpty(this.novoRegistro.email))
        throw "Fill e-mail field";
      if (this.usersService.nullOrUndefOrEmpty(this.novoRegistro.email))
        throw "Fill e-mail field";
      if (this.usersService.nullOrUndefOrEmpty(this.novoRegistro.group))
        throw "Choose the group ride";
      if (this.novoRegistro.days.length <= 0)
        throw "Choose the days";
      if (this.usersService.nullOrUndefOrEmpty(this.novoRegistro.city))
        this.novoRegistro.city = "";

      var r = confirm("Save user?");
      if (r) {
        this.usersService.setNewUser(this.novoRegistro);
      }

    } catch (e) {
      alert(e);
    }

    console.log(this.novoRegistro);
  }

  marcaDia(dia, marcado) {
    if (marcado)
      this.novoRegistro.days.push(dia);
    else {
      let day = this.novoRegistro.days.find(d => d === dia);
      this.novoRegistro.days.splice(this.novoRegistro.days.indexOf(day), 1)
    }
  }

  discardRegistro() {
    this.novoRegistro = new Users();
  }

}
