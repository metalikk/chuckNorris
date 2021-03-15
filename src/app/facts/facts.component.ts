import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IFact } from "./model/type";
import { FactsFacadeService } from "./services/facade/facts-facade.service";

@Component({
  selector: "cn-facts",
  templateUrl: "./facts.component.html",
  styleUrls: ["./facts.component.scss"],
})
export class FactsComponent implements OnInit {
  public show : boolean = false;

  public factsCategories$: Observable<string[]>;

  public fact$: Observable<IFact>;

  constructor(private factsFacadeService: FactsFacadeService) {
    this.factsCategories$ = factsFacadeService.getFactsCategories$();
  }

  public ngOnInit(): void {
    this.factsFacadeService.loadFactsCategories();
  }

  public getRandomFact(category: string): void {
    this.factsFacadeService.loadFactByCategory(category);
    this.fact$ = this.factsFacadeService.getFactByCategory$();

  }

  public lanceFlamme(): void {
  this.show = !this.show;
  }
}
