import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ViewComponent } from './view/view.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: '', component: UserListComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'view/:id', component: ViewComponent },

  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
