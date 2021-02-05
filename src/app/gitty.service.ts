import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GittyService {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  searchRepos(){

  }
  searchUsers(){
    
  }
}
