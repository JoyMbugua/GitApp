import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  repos: any;
  private token = environment.token;
  private username = '';

  constructor(private http: HttpClient) { }

  getRepos(username) {
    this.username = username;
   

    return this.http.get(`https://api.github.com/users/${username}/repos?access_token=${this.token}`);
  }


}
