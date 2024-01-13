import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  {



//for data fromurl

route: ActivatedRoute = inject(ActivatedRoute);

// for getting data from service
UService = inject(UserService)


user: User | undefined;

constructor() {
  const userid = Number(this.route.snapshot.params['id']);
  this.user = this.UService.getUserById(userid);
}



/////////// ============================================ ///////////////

// user!:User[];


// constructor( private UService: UserService,
//   private route: ActivatedRoute) {
// }


// ngOnInit(): void {

// }


 

}
