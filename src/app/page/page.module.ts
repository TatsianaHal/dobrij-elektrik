import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent, PresentationComponent } from './main';

@NgModule({
  declarations: [MainComponent, PresentationComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainComponent, PresentationComponent]
})
export class PageModule {}
