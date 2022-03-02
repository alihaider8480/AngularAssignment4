import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  clickCounter:number = 0;

  ngusername:string = "";  // ya ngModel usr kia ha ya html ma bhi agar same name ho to wo khud bind karlata h
  ngpassword:string = "";

  usernamevalueget = "";
  passwordvalue = "";
  usernamevalue = "";
  checkusernamelocal = "";
  checkpasseordlocal = "";
  errorMessage = "";
  HomemethodFromHomeComponentVariable = "";
  currentlyLoginStatus:number = 0;
  oneee: string="";
  GotLoginValue: string = "";


  constructor(private toastr: ToastrService) {}

  methodSuccessToaster()
  {
    this.toastr.success("You Have SuccessFuly Login");
  }
  methodFailedToaster()                                // phala mana toaster ko style.css ma import kia ha phir mana app.module.ts
  {                                                    // ma import kia ha phir isi ma constructor ma mana uska aik object banaya ha taka runtimre
    this.toastr.error("Please Try AGain");             // pa mila phir mana yahi method call kia ha sucess ma
  }
  methodBlockedToaster(user1: any)
  {
    this.toastr.error("Your Id Has Been Blocked"+user1);
  }

  usernameEventCalled(getUsername: any)
  {
    this.usernamevalueget = getUsername.target.value;
  }

  nameAndPassword = [           // ya objects of arrays hai
    {
        name: 'ali',
        password:'123',
        blocked: false       // ya index 0 ha
    },
    {
      name: 'haider',
      password:'123',
      blocked: false        // ya index 1 ha
  }
]

  checkLoginStatusSendThatStatusIntoHeaderBlogs()
  {
      if(this.currentlyLoginStatus == 1)
      {
        console.warn('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
         this.GotLoginValue = "Loggined";
      }
      else
      {
        console.warn('q1111111111111111111111111111');
        this.GotLoginValue = "LogOut";
      }
  }

pressHomemethodFromHomeComponent(data: any)
{
  this.HomemethodFromHomeComponentVariable = data;        // ya dosra component ka varibale laka araha hamatlab
}                                                         // child to parent to child ma @Output use kia ha

 checkNameAndPassword()
 {

       console.warn('Login Method Called');
       this.currentlyLoginStatus = 0;
      for (let index = 0; index < this.nameAndPassword.length; index++)
      {
        let user = this.nameAndPassword[index];  // index 0 ka sara data user ma agaya ha//ya abject of arrays ka index sa sa phala 0 index pa chala ga phir 1 pa karaga
        let username_u = user.name;
      if(user.blocked == false && username_u ===this.ngusername)
      {
        console.warn('1 : Username : '+user.name+" / status : "+user.blocked);
        if(username_u===this.ngusername)
        {
          if(user.password === this.ngpassword)
          {
              this.clickCounter = 0;
              user.blocked = false;
              this.GotLoginValue = "Loggined";
              this.methodSuccessToaster();
              this.currentlyLoginStatus = 1;
              break;
          }
          else
          {
            this.currentlyLoginStatus= 0;
            this.methodFailedToaster();
            this.clickCounter++;
          }
        }
             if(this.clickCounter == 3)
              {
                this.GotLoginValue = "LogOut";
                this.clickCounter = 0;
                this.currentlyLoginStatus = 0;
                  user.blocked=true;
                  this.errorMessage = "Your Id Has Been Blocked.... : "+user.name;
              }
              if(username_u !=this.ngusername && user.password != this.ngpassword)
              {
                this.GotLoginValue = "LogOut";
                this.currentlyLoginStatus = 0;
                this.methodFailedToaster();
                  this.errorMessage = "This User Is Not Registered : "+user.name;
              }
        }
        else if(user.blocked == true && username_u ===this.ngusername)
        {
          this.GotLoginValue = "LogOut";
          this.currentlyLoginStatus = 0;
          console.warn('2 : Username : '+user.name+" / status : "+user.blocked);
          this.methodBlockedToaster(user.name);
          this.errorMessage = "Your Id Has Been Blocked : "+user.name;
        }


      }



//  // this.AfterSubmit = this.usernamevalue;
//   //get into variables username and password from fields in the form
//   //for
//   //match values of username and password one by one with
//   //if matched
//   //if user blocked is false
//   // this.AfterSubmit='Login';
//   //this.clickedCounter = 0;
//   //else if not matched
//   //this.clickCounter++;
//   //if clickCounter ==3
 }

}
