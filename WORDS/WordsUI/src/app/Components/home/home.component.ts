import { Component } from '@angular/core';
import { Word } from '../../Interfaces/word';
import { WordComponent } from '../word/word.component';
import { WordsServiceService } from '../../Services/words-service.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WordComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  filteredwords:Word[] = [];

  constructor(
    private wordService:WordsServiceService
    ){
    this.filteredwords = wordService.getAllWords();
  }

  Search(text:string){
    this.filteredwords = this.wordService.getAllWords().filter((word) => (word).newword.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
  }
}
