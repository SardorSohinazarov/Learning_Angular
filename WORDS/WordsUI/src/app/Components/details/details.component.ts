import { Component, Input } from '@angular/core';
import { Word } from '../../Interfaces/word';
import { WordComponent } from "../word/word.component";
import { WordsServiceService } from '../../Services/words-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.scss',
    imports: [WordComponent]
})
export class DetailsComponent {
  /**
   *
   */
  constructor(private $wordService : WordsServiceService, private route: ActivatedRoute) {
  
  }

  keyword :string = this.route.snapshot.params['word']
  
  word:Word = this.$wordService.getWordFromName(this.keyword)
}
