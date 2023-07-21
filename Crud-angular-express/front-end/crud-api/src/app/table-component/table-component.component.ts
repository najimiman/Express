import { Component, EventEmitter, Output } from '@angular/core';
import { Taches } from './taches.module';
import { MyServiceService } from '../services/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent {
  constructor(private tacheservice:MyServiceService,private router: Router) { }

  // taches:Taches[]=[
  //   {"id": "1","name": "Task 1", "datetime":new Date("2022-11-12")},
  //   {"id": "2","name": "Task 2", "datetime":new Date("2022-11-12")},
  //   {"id": "3","name": "Task 3", "datetime":new Date("2022-11-12")}
  // ]

  taches:Taches[]=[];
  @Output() selectmyrow=new EventEmitter<Taches>();
  deleteIcon = 'delete';



  displayedColumns: string[] = ['_id','name', 'datetime', 'delete','update'];
  dataSource :any;
  myId:number=0;
  

  ngOnInit(){
    // this.listuser=this.usersservice.getUsers();
    // console.log(this.usersservice.getUsers())

    // this.tacheservice.getalltache().subscribe((data:any)=>{
    //   // this.taches.push(data);
    //   console.log(data);

    // })
    this.gettache();
  }
  gettache(){
    this.tacheservice.getalltache()
    .subscribe((data:any) => {
      console.log(data);
      this.taches=data;
      this.dataSource=data

    }, (error) => {
      console.log(error);
    });
    
  }

 
  deleterow(row:any){
    // alert(row._id);
    this.tacheservice.deletetask(row._id).subscribe((data)=>{
      // this.mytask=[data,...this.mytask];
      console.log(data);
      this.gettache();
      // this.taches=this.taches.filter((task:any) => task._id!=row._id)
    },(err)=>{
      console.log(err)
    })
    // const index = this.dataSource.data.indexOf(row);
    // this.dataSource.data.splice(index, 1);
    // this.dataSource._updateChangeSubscription();
  }
  editrow(row:any){
    this.myId=row._id;
    this.router.navigate(['/edittask', this.myId]);
    // alert(this.myId);
  }
}
