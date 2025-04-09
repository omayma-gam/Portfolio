import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
  constructor(private  titleService:Title) {
    this.titleService.setTitle('Omayma Gamrani - Projects');
  }
}
