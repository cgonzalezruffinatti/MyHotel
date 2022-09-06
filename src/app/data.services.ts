import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService implements InMemoryDbService  {
    constructor() { }
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
       return {
        todos: [
            {
                id: 1,
                title: 'Card One',
                description: 'Description card one',
                color: 'red',
                date: '6-15-22, 9:03 AM'
            },
            {
                id: 2,
                title: 'Card Two',
                description: 'Description card two',
                color: 'orange',
                date: '9-6-22, 5:28 PM'
            },
            {
                id: 3,
                title: 'Card Tree',
                description: 'Description card two',
                color: 'orange',
                date: '15-8-22, 5:28 PM'
            }
        ]
       }
    }
    
}