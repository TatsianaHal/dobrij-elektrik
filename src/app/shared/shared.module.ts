import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    // modules:
    FormsModule,
    ReactiveFormsModule,
    // components:
    ContactFormComponent
  ],
  providers: []
})
export class SharedModule {}
