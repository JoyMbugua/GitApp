import { Component, OnInit } from '@angular/core';
import { GittyService } from '../gitty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  constructor(private service: GittyService) { }

  ngOnInit() {

    this.service.getUsers().subscribe(response => {
      this.users = response;
      console.log(this.users)
      return this.users
    })
  }

}
