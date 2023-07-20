import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Taches } from '../table-component/taches.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }

  getalltache(){
    // const headers=new HttpHeaders({
    //   'content-type':'application/json',
    //   'authentificationToken':'123456789'
    // })
    return this.http.get('/api/tache')
  }

  addtask(body:any){
    return this.http.post('/api/addtache',body)
  }

  deletetask(id:any){
    return this.http.delete(`/api/deletetache${id}`)
  }

  

}
