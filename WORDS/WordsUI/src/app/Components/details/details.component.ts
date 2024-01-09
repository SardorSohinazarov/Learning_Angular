import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Word } from '../../Interfaces/word';
import { WordComponent } from "../word/word.component";
import { WordsServiceService } from '../../Services/words-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.scss',
    imports: [WordComponent,FormsModule,ReactiveFormsModule]
})
export class DetailsComponent{
  constructor(private $wordService : WordsServiceService, private route: ActivatedRoute) {}

  keyword :string = this.route.snapshot.params['word']
  
  word:Word = this.$wordService.getWordFromName(this.keyword)

  form:FormGroup = new FormGroup(
    {
      email: new FormControl(''),
      comment: new FormControl('')
    }
  )

  Send(){
    alert(this.form.value.email +":"+ this.form.value.comment)
  }
}
