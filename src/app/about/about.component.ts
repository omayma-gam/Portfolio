import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ProjetsComponent} from '../projets/projets.component';
import {MyprComponent} from '../mypr/mypr.component';
import {Project} from '../_models/project';
import {Tag} from '../_models/Tags';
import {Projects} from '@angular/cli/lib/config/workspace-schema';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ProjetsComponent,
    MyprComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  project:Project[]=[
    {id:0, name:'sample Angular App', summary:'Test Description', description:'', projectLink:'', tags:[Tag.ANGULAR,Tag.Java], picture:[]},

  ];
  constructor(private  titleService:Title) {
    this.titleService.setTitle('Omayma Gamrani - About');
  }
}
