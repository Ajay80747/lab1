import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypescriptdemoComponent } from './typescriptdemo/typescriptdemo.component';

@Component({
  selector: 'app-root',
  imports: [TypescriptdemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  name:String = "Ajay Kumar";
  age:number = 20;
  isLoggedIn:boolean = true;

  // define an array of Strings 
  hobbies:string[]=['Reading','Writing','Coding'];
  
}
