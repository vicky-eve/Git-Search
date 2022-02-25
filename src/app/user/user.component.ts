import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  getUser:any=User;
      repos:any=Repo;

  constructor(public userService:UserService) {
  }
  searchUser(myname:any){
    this.userService.getDetails(myname).then((success:any)=>{
      this.getUser = this.userService.gotUser;
    },
    (error:any)=>{
      console.log('enter name')
    });
    this.userService.getReDetails(myname).then((success:any)=>{
      this.repos = this.userService.repos;
    },
    (error:any)=>{
      console.log('repo not found')
    }
    );
  }

  ngOnInit(): void {
    this.searchUser('vicky-eve');
  }



}
