import { Component } from '@angular/core';
import { faQuestion, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faHome, faPuzzlePiece, faTrophy, faMapSigns, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';


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
  
  faHome = faHome
  faPuzzlePiece = faPuzzlePiece;
  faTrophy = faTrophy;
  faMapSigns = faMapSigns;
  faTrashAlt=faTrashAlt;

  constructor(public route: Router) { 
  }
  // this.route.breadcrumb;

  // breadcrumbs$ = this.route.events
  // .filter(event => event instanceof NavigationEnd)
  // .distinctUntilChanged()
  // .map(event =>  this.buildBreadCrumb(this.activatedRoute.root));

}
