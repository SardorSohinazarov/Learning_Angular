import { Injectable } from '@angular/core';
import { Card } from '../Interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  cards:Card[] = [
    {
      title: "Qales",
      price: 12324,
      photo:"https://storage.kun.uz/source/RASMLAR/ifgyfg8sd2549-1.jpg"
    },
    {
      title: "Qales1",
      price: 12324,
      photo:"https://storage.kun.uz/source/RASMLAR/ifgyfg8sd2549-1.jpg"
    },
    {
      title: "Qales2",
      price: 12324,
      photo:"https://storage.kun.uz/source/RASMLAR/ifgyfg8sd2549-1.jpg"
    },
    {
      title: "Qales3",
      price: 12324,
      photo:"https://storage.kun.uz/source/RASMLAR/ifgyfg8sd2549-1.jpg"
    },
    {
      title: "Qales4",
      price: 12324,
      photo:"https://storage.kun.uz/source/RASMLAR/ifgyfg8sd2549-1.jpg"
    },
]

  public GetAllCards() : Card[] {
    return this.cards;
  }
}
