import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { DateCountPipe } from './date-count.pipe';
import { GitDirective } from './git.directive';

import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UnavailableComponent } from './unavailable/unavailable.component';


@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    UserComponent,
    NavbarComponent,
    GitsearchFormComponent,
    DateCountPipe,
    GitDirective,
    UnavailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
