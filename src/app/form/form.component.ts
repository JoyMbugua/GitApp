import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user-class/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username: string;


  @Output() addUser = new EventEmitter<any>();


  submitQuery(): void{
    this.addUser.emit(this.username);
    
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
