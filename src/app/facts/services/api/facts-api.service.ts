import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FactsApiService {
    constructor(private httpClient: HttpClient) {}

    public getFactsCategories$(): Observable<string[]> {
        return this.httpClient.get<string[]>('https://api.chucknorris.io/jokes/categories')
    }

    public getRandomFact$(category: string): Observable<any> {
        return this.httpClient.get<any>(`https://api.chucknorris.io/jokes/random?category=${category}`)
    }
    
}