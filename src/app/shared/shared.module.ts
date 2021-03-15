import { NgModule } from '@angular/core';
import { ButtonDirective, FireDirective } from './button/button.directive';

@NgModule({
  declarations: [ButtonDirective, FireDirective],
  imports: [],
  exports: [ButtonDirective, FireDirective],
  providers: [],
})
export class SharedModule { }
