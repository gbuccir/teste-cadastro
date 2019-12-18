import { Component } from '@angular/core';
import { faQuestion, faAngleDown} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-venturus';

  //icons fontawesome
  faQuestion = faQuestion;
  faAngleDown = faAngleDown;
}
