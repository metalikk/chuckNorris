import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactsComponent } from './facts.component';


const routes: Routes = [
  {
    path: '',
    component: FactsComponent
  },
  {
    path: ':category',
    component: FactsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactsRoutingModule { }
