import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';


const routes: Routes = [
  { path:'profile', component: HomeComponent},
  { path:'repos', component:SearchRepoComponent},
  { path:'', redirectTo:'/profile', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
