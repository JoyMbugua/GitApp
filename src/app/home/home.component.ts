import { Component, OnInit } from '@angular/core';
import { GittyService } from '../gitty.service';
import { ReposService } from '../repo-service/repos.service';
import { User } from '../user-class/user';
import { UsersService } from '../user-service/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  constructor(private service: GittyService, private userService: UsersService, private repoService: ReposService) { }

  ngOnInit() {

    this.userService.getUsers('JoyMbugua');
    this.user = this.userService.user
  }

}
