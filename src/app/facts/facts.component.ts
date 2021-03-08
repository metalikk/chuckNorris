import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FactsFacadeService } from './services/facade/facts-facade.service';

@Component({
  selector: 'cn-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  public factsCategories$: Observable<string[]>;

  constructor(private factsFacadeService: FactsFacadeService) {
    this.factsCategories$ = factsFacadeService.getFactsCategories$()
  }

  public ngOnInit(): void {
    this.factsFacadeService.loadFactsCategories();
  }

  public getRandomFact(category: string): void {
    this.factsFacadeService.loadFactByCategory(category);
    this.factsFacadeService.getFactByCategory$().subscribe((fact) => {
      if (fact != null) {
        alert(fact.value);
      }
    })
  }

}
