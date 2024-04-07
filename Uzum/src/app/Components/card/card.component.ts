import { Component, Input } from '@angular/core';
import { Card } from '../../Interfaces/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input()
  card!:Card;
}
