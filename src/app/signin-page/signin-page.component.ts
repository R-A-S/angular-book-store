import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
    });
  }

  submit(): void {
    console.log(this.form);
    if (this.form.invalid) {
      return undefined;
    }
    const user: User = {
      username: this.form.value.name
    }
  }
}
