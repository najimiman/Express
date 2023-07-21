import { Component } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { Taches } from '../table-component/taches.module';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
  id:any
editform=false;
mytask={
  name:'',
  datetime:''
}
constructor(private datePipe:DatePipe, private taskservice:MyServiceService,private router: Router,private route: ActivatedRoute){}

ngOnInit() {
  this.id = this.route.snapshot.params['myId'];
  console.log(this.id);
  try{
    if(this.id !== undefined) {
      this.taskservice.gettaskbyid(this.id).subscribe((data:any)=>{
        console.log('task détails',data);
        if(data){
          this.mytask=data;
          this.editform=true;
        }      
      })
    }
    else{
      console.log('not found');
    }
  }
 catch(err){
  console.log(err)
 }
 
}

savetask(){
 if(this.editform){
  this.updatetask();
}
  else{
    this.addtask();
  }
}

addtask(){
   //  moment(this.mytask.datetime, 'DD/MM/YYYY', true).isValid()
   if(this.mytask.name!=="" && this.mytask.datetime!==""){
    this.taskservice.addtask(this.mytask).subscribe(data=>{
      console.log(data);
      console.log(this.mytask.datetime);
      this.router.navigate(['/home']);
    },(err)=>{
      console.log(err)
    })
  }
  else{
    alert('remplir');
  }
}

updatetask(){
  this.taskservice.updatetask(this.id,this.mytask.name,this.mytask.datetime).subscribe(data=>{
    console.log(data);
    console.log(this.id,this.mytask);
    // console.log(this.mytask.datetime);
    // this.router.navigate(['/home']);
  },(err)=>{
    console.log(err)
  })
}
}
