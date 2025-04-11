import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {RouterLink} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   constructor(private  titleService:Title) {
   this.titleService.setTitle('Omayma Gamrani - Home');
   }
}
