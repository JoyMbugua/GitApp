import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;
  private token = environment.token;
  

  constructor(private http: HttpClient) { }

  getUsers(username) {
  
    interface ApiResponse {
      login: string;
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

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}?access_token=${this.token}`).toPromise().then(data => {
        console.log(data)
      this.user = new User(
        data.login,
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

        resolve(data);
      }, error => {
        alert("oops!")
        reject(error)
      })
    })
    return promise;


  }
}
