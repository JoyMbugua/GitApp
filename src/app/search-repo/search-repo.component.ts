import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {
  repos: any
  search: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  performSearch(){
    
    let promise = new Promise((resolve, reject) => {
      this.http.get(`https://api.github.com/search/repositories?q=${this.search}&sort=stars&order=desc`).toPromise().then(data => {
        this.repos = data['items'];
        resolve(data)
      }, error => {
        alert("Something seems wrong:(")
        reject(error)
      })
    })
   return promise;
  }
}
