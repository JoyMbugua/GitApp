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
    
    this.http.get(`https://api.github.com/search/repositories?q=${this.search}&sort=stars&order=desc`).subscribe(data => {
    this.repos = data['items'];
    console.log(this.repos)
    })
  }
}
