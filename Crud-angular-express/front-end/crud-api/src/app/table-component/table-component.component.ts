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

  taches:Taches[]=[];
  @Output() selectmyrow=new EventEmitter<Taches>();
  deleteIcon = 'delete';



  displayedColumns: string[] = ['_id','name', 'datetime', 'delete','update'];
  dataSource :any;
  myId:number=0;
  name:any;

  ngOnInit(){
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
      search(){
          console.log(this.dataSource);
        console.log(this.name);
        if(this.name!=""){
           this.dataSource = this.taches.filter((res: any) => {
          console.log(res.name)
          if (res.name!="") {
            return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          }
          return false;
        });
        }
        else{
          this.ngOnInit();
        }
    }

 
  deleterow(row:any){
    // alert(row._id);
    this.tacheservice.deletetask(row._id).subscribe((data)=>{
      console.log(data);
      this.gettache();
    },(err)=>{
      console.log(err)
    })
  }
  editrow(row:any){
    this.myId=row._id;
    this.router.navigate(['/edittask', this.myId]);
    // alert(this.myId);
  }
}
