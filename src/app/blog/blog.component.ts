import { AliservicesService } from './../services/aliservices.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  ngproductname:string = "";  // ya ngModel usr kia ha ya html ma bhi agar same name ho to wo khud bind karlata h
  ngquantity:number = 3;
  totalCountServiceData:number=0;
  cc:number =3;

  productsList =[
    {
      name: '',
      quantity: 0
    }
  ]

  constructor(private aliservicesService: AliservicesService)
  {
    console.warn('Blogs construcor called');
    this.totalCountServiceData = aliservicesService.serviceProductsList.length;
    this.productsList = aliservicesService.serviceProductsList;
    this.SecondProcutList = this.productsList;
    this.cc = this.productsList.length;
    aliservicesService.serviceProductsListCounter.subscribe((newEvents) => {
         this.cc = newEvents.length;
    });
  }

  ngOnInit(): void {
  //  this.finalCounter.emit(this.totalCountServiceData);
  }

  submitProduct(){
      this.aliservicesService.addEmployyDataService(this.ngproductname,this.ngquantity);
  }

  SecondProcutList:any [] = this.productsList;

  searchPro(proName: any)
  {
         proName = proName.target.value;
        this.SecondProcutList = this.productsList.filter(
          (proNameFinal) =>{
            return proNameFinal.name.includes(proName);
          }
        );
  }

  addNewdataintoservice(event:any)
  {
     this.aliservicesService.addEmployyDataService(event.target[0].value,event.target[1].value);
  }
}




    // this.aliservicesService.serviceProductsList.push(
    //   {
    //     name:this.ngproductname,
    //     quantity:this.ngquantity
    //   });
