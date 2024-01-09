import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './Components/home/home.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './Components/details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    HomeComponent,
    RouterModule,
    DetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[]
})
export class AppComponent {
  title = 'WordsUI';
}
