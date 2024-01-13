import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {


  updateUserform!: FormGroup;

  userid!: number;


  constructor(private formbuilder: FormBuilder,
     private UService: UserService,
      private route: ActivatedRoute
      ) {

    this.updateUserform = this.formbuilder.group({
      name: [''],
      age: [''],
      email: [''],
      address: [''],
      password: [''],

    })


  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userid = +params['id'];
      this.loaduserDetails();
    });
  }


  loaduserDetails() {
    const user = this.UService.getUserById(this.userid);

    if (user) {
      this.updateUserform.patchValue(user);
    } else {
      // Redirect to the product list if the product is not found

    }
  }

  upDateUser() {
    if (this.updateUserform.valid) {
      const updateduser: User = {
        id: this.userid,
        ...this.updateUserform.value
      };

      this.UService.upDateUser(this.userid,updateduser);

    }
  }
 

}
