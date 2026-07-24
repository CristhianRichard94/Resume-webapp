import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material.module';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    TranslateDirective,
    TranslatePipe
  ],
  exports: [
    CustomMaterialModule,
    TranslateDirective,
    TranslatePipe
  ]
})
export class SharedModule { }
