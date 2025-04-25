import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import {FlexLayoutModule} from '@ngbracket/ngx-layout'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FlexLayoutModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Porfolio';
  faFacebook = faFacebook;
  faGithub = faGithub;
  faMoon = faMoon;


  view: any = 'home'
  handleView(view: any) {
    this.view = view;
  }
}
