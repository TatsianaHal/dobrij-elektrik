import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainComponent]
})
export class PageModule {}
