import { Component, OnInit } from '@angular/core';
import {EmpService} from '../emp.service';;
import {Emp} from '../emp';
import { empty } from 'rxjs';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  providers:[EmpService]
})
export class EmplistComponent implements OnInit {
emps:Emp[];
emp:Emp;
firstName: String;
lastNameName: String;  
  constructor(private EmpService:EmpService) { }

  addEmp(){
    const newEmp = {
      firstName: this.firstName,
      lastNameName: this.lastNameName
    }
    this.EmpService.addEmp(newEmp).subscribe(emp =>{
      this.emps.push(emp);
      this.EmpService.getEmp().subscribe(emp => this.emp = emp);
    }); 
    
  }

  deleteEmp(id:any){
    var empno = this.emps;
    this.EmpService.deleteEmp(id).subscribe(data =>{
      if(data.n==1){
        for(var i=0;i<empno.length;i++){
          if(empno[i]._id == id){
            empno.splice(i,1);
          }
        }
      }
    })
  }

  ngOnInit() {
    //retrive data
    this.EmpService.getEmp().subscribe(emp => this.emp = emp);
  }

}
