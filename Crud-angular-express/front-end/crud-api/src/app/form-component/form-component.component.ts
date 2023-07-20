import { Component } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { Taches } from '../table-component/taches.module';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
constructor(private taskservice:MyServiceService){}

mytask={
  name:'',
  datetime:''
}
savetask(){
  if(this.mytask.name!="" && this.mytask.datetime){
    this.taskservice.addtask(this.mytask).subscribe(data=>{
      // this.mytask=[data,...this.mytask];
      console.log(data);
    },(err)=>{
      console.log(err)
    })
  }
  else{
    alert('remplir');
  }
 
}
}
