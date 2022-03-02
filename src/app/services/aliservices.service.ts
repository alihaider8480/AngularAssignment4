import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AliservicesService {

  constructor() {
   }

  @Output('serviceProductsListCounter')
  serviceProductsListCounter = new EventEmitter<any[]>();

  serviceProductsList =[
    {
      name: 'hp',
      quantity: 6
    },
    {
      name: 'dell',
      quantity: 2
    },
    {
      name: 'intell',
      quantity:3
    },
  ]

  addEmployyDataService(name:string , quantity:number)
  {
        this.serviceProductsList.push({name: name,quantity: quantity});
        this.serviceProductsListCounter.emit(this.serviceProductsList);

        console.warn('@Output value is  : '+this.serviceProductsListCounter);
  }
}
