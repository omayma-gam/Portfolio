import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FooterComponent} from '../footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private  titleService:Title) {
    this.titleService.setTitle('Omayma Gamrani - Contact');
  }
}
