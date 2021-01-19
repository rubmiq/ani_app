import { Injectable } from '@angular/core';

export enum Categories{

  INTERIOR = 0,
  EXTERIOR = 1,
  OTHER = 2,

}

@Injectable({
  providedIn: 'root'
})
export class BackService {
  data=[
    {
      id: 1,
      name: 'aaaaa',
      descriptionShort: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
      descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam deserunt similique, voluptatibus culpa eaque doloribus quas debitis ad! Reprehenderit iure veniam, saepe omnis in beatae quo ex dolore soluta.",
      category: Categories.INTERIOR,
      img: ['AISS1803.jpg', 'Bildschirmfoto.png','chairman.jpg', 'DEDON_CIRQL.jpg']
    },
    {
      id: 2,
      name: 'bbbb',
      descriptionShort: 'bbbbbbbbbb',
      descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam deserunt similique, voluptatibus culpa eaque doloribus quas debitis ad! Reprehenderit iure veniam, saepe omnis in beatae quo ex dolore soluta.",
      category: Categories.EXTERIOR,
      img: ['chairman.jpg', 'DEDON_CIRQL.jpg']
    },
    {
      id: 3,
      name: 'cccc',
      descriptionShort: 'cccccccccccccc',
      descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam deserunt similique, voluptatibus culpa eaque doloribus quas debitis ad! Reprehenderit iure veniam, saepe omnis in beatae quo ex dolore soluta.",
      category: Categories.OTHER,
      img: ['tiletable.jpg']
    },
    {
      id: 4,
      name: 'dddd',
      descriptionShort: 'dddddddddd',
      descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam deserunt similique, voluptatibus culpa eaque doloribus quas debitis ad! Reprehenderit iure veniam, saepe omnis in beatae quo ex dolore soluta.",
      category: Categories.OTHER,
      img: ['tiletable.jpg']
    },
    {
      id: 5,
      name: 'eeee',
      descriptionShort: 'eeeeeeeee',
      descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam deserunt similique, voluptatibus culpa eaque doloribus quas debitis ad! Reprehenderit iure veniam, saepe omnis in beatae quo ex dolore soluta.",
      category: Categories.EXTERIOR,
      img: ['tiletable.jpg']
    },
  ]

  constructor() {

   }

   getData(){
    return this.data
  }

  
}
