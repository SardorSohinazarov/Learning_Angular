import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Word } from '../../Interfaces/word';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink
  ],
  templateUrl: './word.component.html',
  styleUrl: './word.component.scss'
})
export class WordComponent {
  @Input() word!:Word;
}
