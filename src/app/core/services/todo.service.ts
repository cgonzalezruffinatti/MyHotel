import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ToDoService {

    private todoUrl = 'api/todos/';

    constructor(private http: HttpClient) { }

    getToDoList(): Observable<any[]> {
        return this.http.get<any>('api/todos/').pipe(
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        )
    }
}