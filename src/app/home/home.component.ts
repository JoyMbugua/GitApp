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
    this.userService.getUsers(username).subscribe(data => {
      this.user = new User(
        data.login,
        data.name,
        data.html_url, 
        data.avatar_url, 
        data.public_repos, 
        data.public_gists, 
        data.followers, 
        data.following, 
        data.location, 
        data.email, 
        data.blog, 
        data.created_at);
    })

    this.repoService.getRepos(username).subscribe(response => {
      this.repos = response;
    })
   
  }

}
