import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Response } from '@angular/http';


import 'rxjs/add/operator/map';

import { Author } from './authors';

@Injectable()
export class AuthorsService {

    baseUrl: string = "http://localhost:8000/api/authors";

    constructor(private http: Http) { }

    //menampilkan data 
    getAuthors(): Observable<Author[]> {
        return this.http.get(this.baseUrl).map(Response => Response.json() as Author[]);
    }

    //mengambil id author
    getAuthor(id:number): Observable<Author> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url).map(Response => Response.json() as Author);
    }

    //menambahkan data
    addAuthor(author: Author): Observable<Author[]> {
        return this.http.post(this.baseUrl,author).map(this.extractData);
    }

    //edit data
    editAuthor(author: Author,id): Observable<Author> {
        console.log(author);
        return this.http.put(`${this.baseUrl}/${id}`, author)
                        .map(this.extractData);
    }

    //delete data
    deleteAuthor(id:number): Observable<Author>{
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url).map(this.extractData);
    }


    private extractData(res: Response){
        let body = res.json();
        return body.data || {};
    }
}