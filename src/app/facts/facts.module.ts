import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { FactsRoutingModule } from './facts-routing.module';
import { FactsComponent } from './facts.component';
import { FactsItemComponent } from './components/facts-item/facts-item.component';

import { FactsApiService } from './services/api/facts-api.service'
import { FactsFacadeService } from './services/facade/facts-facade.service'
import { FactsStateService } from './services/state/facts-state.service'

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FactsComponent,
    FactsItemComponent
  ],
  imports: [
    FactsRoutingModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [FactsApiService, FactsFacadeService, FactsStateService],
})
export class FactsModule { }
