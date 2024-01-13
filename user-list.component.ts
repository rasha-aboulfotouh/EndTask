import { Component, OnInit, inject } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {

 
 

  users: User [] = [];
  UService :UserService= inject(UserService);
 


  constructor() {
    this.users = this.UService.getAllUsers() ;

  }

  
  //Delete
  deleteUser(id:number){
    this.UService.deleteUser(id);
  }




  //??????????????///////?????????????? ======  //??????????????///////??????????????

  // users!: User[];

  // constructor( private UService: UserService   ) {  }


//   ngOnInit(): void {
//   this.UService.getAllUsers().subscribe( (users)=>  {this.users = user }) ;
//   }



//   deleteUser(id: number): void {
//     this.UService.deleteUser(id);

// }





}





