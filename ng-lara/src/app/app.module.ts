import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './author/list/list.component';

import { AuthorsService } from './author/authors.service';
import { AddComponent } from './author/add/add.component';
import { EditComponent } from './author/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule , 
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"authors",component: ListComponent}
    ])
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
