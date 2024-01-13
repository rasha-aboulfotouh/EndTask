import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  userform!: FormGroup;


  constructor(
    private fB: FormBuilder,
    private UService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {

    this.userform = this.fB.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)] ],
      age: [' ',],
      email: ['', [Validators.email]],
      address: [''],
      password: [''],

    })

  }


  ///      *******     ///


  save() {
    console.log(this.userform.value);

    this.UService.addUser(this.userform.value);
    this.router.navigate(['']);
  }

}
