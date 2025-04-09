import { Component, Input } from '@angular/core';
import {Project} from '../_models/project';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-mypr',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './mypr.component.html',
  styleUrl: './mypr.component.css'
})
export class MyprComponent {
  @Input() projecte={}as Project;
}
