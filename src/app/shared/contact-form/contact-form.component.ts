import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactInfoService } from '../../services';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  ad: any;
  form: FormGroup;

  constructor(private ciService: ContactInfoService, private fb: FormBuilder) {}

  ngOnInit() {}
}
