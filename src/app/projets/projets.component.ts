import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
  constructor(private  titleService:Title) {
    this.titleService.setTitle('Omayma Gamrani - Projects');
  }
}
