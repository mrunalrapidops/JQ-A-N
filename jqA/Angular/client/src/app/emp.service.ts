import { Injectable } from '@angular/core';
import {Http,Headers } from '@angular/http';


import {Emp} from './emp';
import { map} from "rxjs/operators";
import 'rxjs/add/operator/map';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Type } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(public http:Http) { }
  //retrive emp

  getEmp()
  {
    return this.http.get('http://localhost:3000/getdata')
    .map(res => res.json());
  }
  addEmp(newEmp)
  {
    var headers = new Headers();
    /* headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000'); */
    
    return this.http.post('http://localhost:3000/addname',newEmp,{headers:headers})
    .map(res => res.json());
    //location.reload(true);
  }
  deleteEmp(id)
  {
    return this.http.delete('http://localhost:3000/delete/'+id)
    .map(res => res.json());
  }

}
