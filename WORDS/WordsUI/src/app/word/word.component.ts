import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './word.component.html',
  styleUrl: './word.component.scss'
})
export class WordComponent {

}
