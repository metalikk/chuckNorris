import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactsApiService } from './../api/facts-api.service';
import { FactsStateService } from './../state/facts-state.service';
import { IFact } from './../../model/type'

@Injectable()
export class FactsFacadeService {
    constructor(private factsStateService: FactsStateService, private factsApiService: FactsApiService) {}

    public loadFactsCategories(): void {
        this.factsApiService.getFactsCategories$().subscribe((categories) => {
            this.factsStateService.setFactsCategories$(categories)
        }, (error) => console.error(error))
    }

    public getFactsCategories$(): Observable<string[]> {
        return this.factsStateService.getFactsCategories$();
    }

    public loadFactByCategory(category: string): void {
        this.factsApiService.getRandomFact$(category).subscribe((fact) => {
            this.factsStateService.setRandomFact(fact)
        }, (error) => console.error(error));
    }

    public getFactByCategory$(): Observable<IFact> {
        return this.factsStateService.getRandomFact$();
    }
}