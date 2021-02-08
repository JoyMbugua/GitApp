import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;
  apiKey: string = environment.token;

  

  constructor(private http: HttpClient) { }

  getUsers(username) {
  
    interface ApiResponse {
      login: string;
      name: string,
      html_url: string;
      avatar_url: string;
      public_repos: string;
      public_gists: string;
      followers: number;
      following: number;
      email: string;
      location: string;
      blog: string;
      created_at: string;
    }

   
      return this.http.get<ApiResponse>("https://api.github.com/users/" + username + "?access_token=" +this.apiKey)

  }
}
