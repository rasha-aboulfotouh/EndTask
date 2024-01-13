import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 


  //data //
  private users: User[] = [

    {
      id: 1, name: "Rasha", age: "22", email: "Rasha@gmail.com", address: "Q R", password: "1234"

    },

    {
      id: 2, name: "Maryam", age: "22", email: "Maryam@gmail.com", address: "2 m", password: "4321"

    },

    {
      id: 3, name: "Fatma", age: "22", email: "Fatma@gmail.com", address: "3 f", password: "2541"

    },

    {
      id: 4, name: "Shorouq", age: "22", email: "Shorouq@gmail.com", address: "4 s", password: "1452"

    },
  ]


  constructor() { }

  getAllUsers(): User[] {

    return this.users;
  }



  //get specific user by id

  getUserById(id: number): User | undefined {

    return this.users.find(user => user.id === id);
  }


  //DELETE
  deleteUser(id: number) {
    const index = this.users.findIndex((user => user.id === id));
    this.users.splice(index, 1);
  }

  //address length
  usercount(): number {

    return this.users.length;
  }

  nextid = 5;

  addUser(employee: User) {
    employee.id = this.nextid++;
    this.users.push(employee);
  }

  // upDateUser //

  upDateUser(userid: number, updateduser: User) {

    const index = this.users.findIndex(user => user.id === userid);

    this.users[index] = { ...updateduser, id: userid }


  }

  // getUsers(): Observable<User[]> {
  //   return of(this.users);
  // }

  // getUserById(id: number): Observable<User | undefined> {
  //   return of(this.users.find(user => user.id === id));
  // }

  // addUser(user: User): void {
  //   user.id = Math.max(...this.users.map(u => u.id)) + 1;
  //   this.users.push(user);
  // }


  // // upDateUser(user: User): void {
  // //   const index = this.users.findIndex(u => u.id === user.id);
  // //   if (index !== -1) {
  // //     this.users[index] = user;
  // //   }
  // // }


  // upDateUser(userid: number, updateduser: User) {

  //   const index = this.users.findIndex(user => user.id === userid);

  //   this.users[index] = { ...updateduser, id: userid }


  // }



  // deleteUser(id: number): void {
  //   this.users = this.users.filter(user => user.id != id);
  // }

}