import { Component } from '@angular/core';
import { ExampleService } from './example.service';
import { Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

declare var JustGage:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExampleService]
  
})

export class AppComponent {


  title = 'app';
  color="accent";
  name : string;

  device:boolean=false;
  public val;
  value:number=0;
 
  options = {
    id: "gauge",
    value: 99,
    min: 0,
    max: 999,
    title: "Visitors"
  }
  max = 100;
  
  

  
  click()
  {
     console.log("clicked");
  }
  send(value)
  {
     if(value.checked==true)
     {
        console.log(1);
       
     }
     else
     {
        console.log(0);
     }
  }
  go(value)
  {
     
    
     this.val=value.value;
     console.log(this.val);
     

  }
  openNav()
  {
      document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav()
  {
     document.getElementById("mySidenav").style.width="0";
  }


  constructor(private _exampleService : ExampleService)
  {
      
  }

  ngOnInit(){

      this.name=this._exampleService.someMethod();
  }
 
}




