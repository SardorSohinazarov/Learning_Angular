import { Component } from '@angular/core';
import { Card } from '../../Interfaces/card';
import { CardsService } from '../../Services/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.sass'
})
export class DetailsComponent {
  product!:Card;

  constructor(private cardService:CardsService, private route:ActivatedRoute) {
    let title = this.route.snapshot.params['title'];
    this.product = this.cardService.GetCardById(title)!;
  }
}
