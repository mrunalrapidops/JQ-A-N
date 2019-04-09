import { Component, OnInit } from '@angular/core';
import {EmpService} from '../emp.service';;
import {Emp} from '../emp';

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

  ngOnInit() {
    //retrive data
    this.EmpService.getEmp().subscribe(emp => this.emp = emp);
  }

}
