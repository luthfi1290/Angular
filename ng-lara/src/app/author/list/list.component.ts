import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AuthorsService } from '../authors.service';

import { Author } from '../authors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  authors: Author[];
  author: Author;

  constructor(private authorsService : AuthorsService) { }

  ngOnInit() {
    let timer = Observable.timer(0,2000);
    timer.subscribe( () => this.getDataAuthors())
  }

  getDataAuthors(){
    this.authorsService.getAuthors().subscribe(authors => this.authors = authors);
  }

  getAuthorId(id:number):void {
    this.authorsService.getAuthor(id).subscribe(author => this.author = author);
  }

  deleteThisAuthor(id:number):void {
    this.authorsService.deleteAuthor(id).subscribe(author => this.author = author);
  }
}
