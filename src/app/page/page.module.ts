import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent, PresentationComponent } from './main';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [MainComponent, PresentationComponent],
  imports: [CommonModule, SharedModule, PerfectScrollbarModule],
  exports: [MainComponent, PresentationComponent, PerfectScrollbarModule]
})
export class PageModule {}
