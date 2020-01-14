import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { StateService } from '../shared/services/state.service';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent implements OnInit {
  form: FormGroup;

  submitted = false;

  message: string;

  user: User;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private state: StateService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginAgain) {
        this.message = 'Please log in again.';
      }
      this.state.user.subscribe((result) => {
        this.user = result;
      });
    });

    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const userLogin = {
      username: this.form.value.name,
    };
    this.auth.login(userLogin).subscribe((user) => {
      this.state.changeUser(user);
      this.form.reset();
      this.router.navigate(['/books']).then((r) => r);
      this.submitted = false;
    });
  }
}
