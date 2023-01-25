import { Component } from '@angular/core';
import { faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  linkedin= faLinkedin
  youtube= faYoutubeSquare
}
