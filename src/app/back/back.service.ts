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
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
      category: Categories.INTERIOR,
      img: ['AISS1803.jpg', 'Bildschirmfoto.png']
    },
    {
      id: 2,
      name: 'bbbb',
      description: 'bbbbbbbbbb',
      category: Categories.EXTERIOR,
      img: ['chairman.jpg', 'DEDON_CIRQL.jpg']
    },
    {
      id: 3,
      name: 'cccc',
      description: 'cccccccccccccc',
      category: Categories.OTHER,
      img: ['tiletable.jpg']
    },
  ]

  constructor() {

   }

   getData(){
    return this.data
  }

  
}
