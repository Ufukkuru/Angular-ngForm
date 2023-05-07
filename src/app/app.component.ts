import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _date:DatePipe
  ){
    const transformedDate = this._date.transform(new Date(), 'yyyy-MM-dd');
    this.addModel.dateOfStart = transformedDate !== null ? transformedDate : '';
  }

  updateModel = new Employee()
  addModel = new Employee()
  employees:Employee[]=[]
  index:number= 0
  isUpdateFormActive:boolean=false

  save(form:NgForm){
    if(form.valid){
      this.employees.push(this.addModel)
      this.addModel = new Employee()
      const transformedDate = this._date.transform(new Date(), 'yyyy-MM-dd');
    this.addModel.dateOfStart = transformedDate !== null ? transformedDate : '';
    }
  }

  get(model:Employee, index:number){
    this.index = index
    this.updateModel= {...model}
    this.isUpdateFormActive = true
  }

  cancel(){
    this.isUpdateFormActive=false
  }

  update(form:NgForm){
    if(form.valid){
      this.employees[this.index]= this.updateModel
      this.isUpdateFormActive=false
    }
  }
}

class Employee{
  name:string=""
  profession:string=""
  dateOfStart: string= ""
}