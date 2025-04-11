import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FooterComponent} from '../footer/footer.component';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  constructor(private  titleService:Title) {
    this.titleService.setTitle('Omayma Gamrani - About');
  }
}
