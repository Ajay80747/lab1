import { Component } from '@angular/core';

enum Role{
  Admin,
  User,
  Guest
}

@Component({
  selector: 'app-typescriptdemo',
  imports: [],
  templateUrl: './typescriptdemo.component.html',
  styleUrl: './typescriptdemo.component.css'
})

export class TypescriptdemoComponent {
// TypeScript Properties

  // String
  studentName: string = "Rajashekar";

  // Number
  age: number = 35;
  price: number = 1999.99;

  // Boolean
  isTrainer: boolean = true;

  // Array
  marks: number[] = [85, 90, 78];
  subjects: Array<string> = ["Java", "Angular", "Spring Boot"];

  // Tuple - specialized array with pre-defined length & known types
  employee: [number, string] = [101, "Ravi"];

  // Enum
  userRole: Role = Role.Guest;

  // Any Type - Dynamic data types
  randomValue: any = "Hello";

  // Unknown - used ur are not sure of data type it will check type while compilimg....
  inputValue: unknown = "Test Data";

  // Union Type - Holds any one of several specified types
  orderId: number | string = 101;

  // Literal Type - Specifies one exact value 
  status: "success" | "error" | "loading" = "success";

  // Object Type
  product: { id: number; name: string; price: number } = {
    id: 1,
    name: "Laptop",
    price: 55000
  };

  company: string;
  empid:number;
  name:String;
  //Constructor is invoked when the component is created. 
  // It is used to initialize the component's properties 
  // and perform any setup tasks required before the component is rendered.

  constructor() { 
    this.company = "Coforge PVT-LTD";
    this.empid = 101;
    this.name = "Ajay Kumar Gorakanti";
  }
  //Angular lifecycle hook that is called after the component's view has been fully initialized.

  NGOnInit():void{
  console.log("Component Initialized");
  this.randomValue=45; // chnaging the value of randomValue to demostarte the use of any type 
  }


  addNumbers(a:number ,b:number):number{
    return a+b;
  }
  area(r:number){
    return 3.14*r*r;
  }

}
