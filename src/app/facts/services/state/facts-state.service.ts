import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FactsStateService {

    private factsCategories: BehaviorSubject<string[]> = new BehaviorSubject(null);
    private randomFact: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor() { }

    public getFactsCategories$(): Observable<string[]> {
        return this.factsCategories.asObservable()
    }

    public setFactsCategories$(factsCategories: string[]): void {
        this.factsCategories.next(factsCategories);
    }

    public getRandomFact$(): Observable<any> {
        return this.randomFact.asObservable()
    }

    public setRandomFact(fact: any): void {
        this.randomFact.next(fact);
    }
}