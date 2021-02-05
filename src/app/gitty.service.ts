import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GittyService {
  private apiKey = environment.apiKey;
  private userName = 'JoyMbugua';

  constructor(private http: HttpClient) { 
    console.log('Gitt APP!!!')
  }

  getRepos(){
    return this.http.get(`https://api.github.com/users/${this.userName}/repos?${this.apiKey}=`);
  }
  getUsers(){
    return this.http.get(`https://api.github.com/users/${this.userName}?${this.apiKey}=`);
  }
}
