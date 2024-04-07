import { Component } from '@angular/core';
import { CardComponent } from '../../Components/card/card.component';
import { Card } from '../../Interfaces/card';
import { CardsService } from '../../Services/cards.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private cardService:CardsService){

  }

  cards:Card[] = this.cardService.GetAllCards();
}
