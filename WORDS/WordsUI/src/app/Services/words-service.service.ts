import { Injectable } from '@angular/core';
import { Word } from '../Interfaces/word';

@Injectable({
  providedIn: 'root'
})
export class WordsServiceService {

  constructor() { }

  words: Word[]=[
    {
      newword: "Apple",
      translation: "Olma",
      example: "Apple is very delicies fruit",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&usqp=CAU"
    },
    {
      newword: "Dog",
      translation:"kuchuk,it",
      example:"My dog's name is Rex,Kuchukni kuchugimni nomi Rex",
      photo:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      newword: "Apple",
      translation: "Olma",
      example: "Apple is very delicies fruit",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&usqp=CAU"
    },
    {
      newword: "Dog",
      translation:"kuchuk,it",
      example:"My dog's name is Rex,Kuchukni kuchugimni nomi Rex",
      photo:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      newword: "Apple",
      translation: "Olma",
      example: "Apple is very delicies fruit",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&usqp=CAU"
    },
    {
      newword: "Dog",
      translation:"kuchuk,it",
      example:"My dog's name is Rex,Kuchukni kuchugimni nomi Rex",
      photo:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    }
  ]

  getAllWords(){
    return this.words;
  }

  getWordFromName(text:string):Word{
    return this.words.find(x => x.newword == text)!;
  }
}
