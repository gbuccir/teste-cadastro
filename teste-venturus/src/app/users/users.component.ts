

import { Component, OnInit } from '@angular/core';
import { faHome, faPuzzlePiece, faTrophy, faMapSigns, faHeartbeat, faSmile, faLifeRing } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() {}

  faHome= faHome
   faPuzzlePiece = faPuzzlePiece;
   faTrophy = faTrophy;
   faMapSigns=faMapSigns;
   faHeartbeat=faHeartbeat;
   faSmile=faSmile;
   faLifeRing=faLifeRing;

  ngOnInit() {
  }

}