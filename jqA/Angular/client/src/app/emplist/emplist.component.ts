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
emps:Emp[] = [];
emp:Emp[];
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
      console.log(this.emps[0]);
      this.EmpService.getEmp().subscribe(emp => this.emp = emp);
    }); 
  }

  deleteEmp(id:any){
    console.log(this.emp);
    console.log("from delete"+this.emp[0]._id);
    this.emp.forEach(i => {
      if(id ===  i._id)
        console.log(`${i._id} mil gaya `);
    });
    this.EmpService.deleteEmp(id).subscribe(data =>{
      //console.log("hello");
    this.EmpService.getEmp().subscribe(emp => this.emp = emp);
    })
}

  ngOnInit() {
    this.EmpService.getEmp().subscribe((emp : any) => {
      this.emp = emp;
      console.log(emp);
    }); 
    }
  }
  //console.log(id);
    // var emps = this.emps;// get data in array
    // emps.forEach(emps => {
    //   console.log(emps);
    // });
    // console.log(emps);
    /* console.log(emps);
    console.log(id);
    //console.log(this.emps[0]._id);
    if(id == emps[0]._id){
      console.log("get id");
    }
    else{
      console.log("not get id");
    } */
    /* this.EmpService.deleteEmp(id).subscribe(data =>{
      if(data.n==1){
      console.log("get data");
      for(var i = 0;i<emps.length;i++){
        if(emps[i]._id == id){
            emps.splice(i,1);
        }
      }
    }
    else{
      console.log("data not found");
    }
  }) */