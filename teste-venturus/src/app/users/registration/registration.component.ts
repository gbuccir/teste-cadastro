import { Component, OnInit } from '@angular/core';
import { faLifeRing , faHeartbeat, faSmile } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  faLifeRing=faLifeRing;
  faHeartbeat=faHeartbeat;
   faSmile=faSmile;

  ngOnInit() {
  }

}
