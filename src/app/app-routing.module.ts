import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnavailableComponent } from './unavailable/unavailable.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"user-profile", component:UserComponent},
  {path:"search-repo", component:RepositoryComponent},
  {path: "", redirectTo:"/user-profile", pathMatch:"full"},
  {path:"**",component:UnavailableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
