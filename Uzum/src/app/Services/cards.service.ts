import { Injectable } from '@angular/core';
import { Card } from '../Interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  cards:Card[] = [
    {
      title: "Telefon",
      price: 1978000,
      photo:"https://images.uzum.uz/co16rav2u18gghclkf10/original.jpg"
    },
    {
      title: "Kirmoshina",
      price: 3990000,
      photo:"https://images.uzum.uz/cnn9rbg4idugcqeh1sl0/original.jpg"
    },
    {
      title: "Futbolka",
      price: 45000,
      photo:"https://images.uzum.uz/cnrvchlbl7rj55mglb7g/original.jpg"
    },
    {
      title: "Soat",
      price: 139000,
      photo:"https://images.uzum.uz/cneqbdrifoubkc6tnajg/original.jpg"
    },
    {
      title: "Choynak",
      price: 12324,
      photo:"https://images.uzum.uz/cn26a3p25kub33f2rdfg/original.jpg"
    },
    {
      title: "Kaleso",
      price: 229000,
      photo:"https://images.uzum.uz/cmag8dp25ku1lubr0770/original.jpg"
    },
    {
      title: "Vertaliyot",
      price: 69000,
      photo:"https://images.uzum.uz/ci9t78lenntd8rfc1fag/original.jpg"
    },
    {
      title: "Velosiped",
      price: 489000,
      photo:"https://images.uzum.uz/co1p9q72u18gghclola0/original.jpg"
    },
]

  public GetAllCards() : Card[] {
    return this.cards;
  }

  public GetCardById(title:string){
    return this.cards.find(x => x.title == title);
  }
}
