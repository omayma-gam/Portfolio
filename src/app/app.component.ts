import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
