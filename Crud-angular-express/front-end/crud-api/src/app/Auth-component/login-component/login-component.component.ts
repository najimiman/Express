import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {
  user:any={
    username:'',
    email:'',
    password:''
  }
  mymessage: string='';
  registre=false
  
constructor(private service:MyServiceService,private router: Router){}
submitauth(){
  if(!this.registre){
    this.authlogin();
  }
  else{
    this.authregistre();
  }
}

authlogin(){
  if(this.user.name!="" && this.user.password!=""){
    this.service.authentificationlogin(this.user).subscribe((data:any)=>{
      console.log(data);
      
      if (data.message == "user  not existe!") {
        console.log(data.message);
        
        this.mymessage=data.message;
        setTimeout(() => {
          this.registre=true;
          for (const prop in this.user) {
            this.user[prop] = '';
            this.mymessage='';
          }
        }, 2000);
       
      }
      else if(data.message == "name or password not correcte !"){
        this.mymessage=data.message;
      }
      else{
        this.router.navigate(['/Home']);
      }
    })
  }
  else{
    alert('remplir');
  }
 
}

authregistre(){
  if(this.user.name!="" && this.user.password!="" && this.user.password!=""){

    this.service.authentificationregistre(this.user).subscribe((data:any)=>{
      console.log(data);
      if (data.message == "user already existe!") {
        console.log(data.message);
        this.mymessage=data.message;
      }
      else if(data.message=="user created succefully!"){
        setTimeout(() => {
          this.mymessage=data.message;
          this.registre=false;
        }, 2000);
        this.mymessage='';
      }
    })
  }
  else{
    alert('remplir');
  }
}
}
