import { AliservicesService } from './../services/aliservices.service';
import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  homepageCalled:EventEmitter<string> = new EventEmitter<string>();


  updateloginvalued:string = "";
  blogValue:string = "";
  headerCounter:number = 0;

  @Input('getting-LoginValue-FromHeader')
  set SetLoginValueCodeValue(login: string)
  {
      if(login =='Loggined')
      {
        this.blogValue = "Blogs";
      }
  }

  constructor(private aliservicesService: AliservicesService)
  {
    this.headerCounter = aliservicesService.serviceProductsList.length;  // phali dafa ma uski current lengt =h ajae gi
    aliservicesService.serviceProductsListCounter.subscribe((newEvent2) => { // phir jab add karonga new item phir ya output() emit kardaga new value or phir upar wali length ka andar ajae gi value
      this.headerCounter = newEvent2.length;
    })
    console.warn('Header construcor called');
  }


  pressHome(data: string)
  {
    if(data === 'home')
    {
      this.homepageCalled.emit('Home Component Called');
    }
    else if(data === 'contact')
    {
      this.homepageCalled.emit('Contact Component Called');
    }
    else if(data === 'about')
    {
      this.homepageCalled.emit('About Component Called');
    }
    else if(data === 'blogs')
    {
      this.homepageCalled.emit('Blogs Component Called');
    }

  }
}
