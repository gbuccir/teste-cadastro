import { Component } from '@angular/core';
import { faQuestion, faAngleDown,faHome, faPuzzlePiece, faTrophy, faMapSigns } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-venturus';
  faQuestion = faQuestion;
  faAngleDown = faAngleDown;
  faHome = faHome;
  faPuzzlePiece=faPuzzlePiece;
  faTrophy=faTrophy;
  faMapSigns=faMapSigns
}
