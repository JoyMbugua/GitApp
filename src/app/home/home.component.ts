import { Component, OnInit } from '@angular/core';
import { ReposService } from '../repo-service/repos.service';
import { User } from '../user-class/user';
import { UsersService } from '../user-service/users.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  repos: any;
  
  constructor(private http: HttpClient, private userService: UsersService, private repoService: ReposService) { 
    
  }

  
  ngOnInit() {

    this.search('JoyMbugua')

    
  }

  search(username){
    this.userService.getUsers(username)
    this.user = this.userService.user;

    this.repoService.getRepos(username)
    this.repos = this.repoService.repos
  }

}
