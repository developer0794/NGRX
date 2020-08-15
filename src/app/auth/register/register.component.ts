import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { registerAction } from 'src/app/store/auth/actions/register.actions';
import { Observable } from 'rxjs';
import {
  isSubmittingSelector,
  validationErrorSelector,
} from 'src/app/store/auth/selectors/register.selector';
import { AuthService } from 'src/app/services/auth.service';
import { BackEnd } from 'src/app/interfaces/backEnd/back-end.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackEnd | null>;
  errorMessages: string[];

  constructor(private store: Store, private authService: AuthService) {
    this.register = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
    this.initializeValues();
  }

  ngOnInit(): void {
    console.log(this.backendErrors$);
    if (this.backendErrors$) {
      this.errorMessages = Object.keys(this.backendErrors$).map(
        (name: string) => {
          // const messages = this.backendErrors$[name].join(' ');
          // return `${name} ${messages}`;
          console.log(name);
          return `true`;
        }
      );
    }
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
    console.log(this.isSubmitting$);
  }

  saveData() {
    const request = {
      user: this.register.value,
    };
    this.store.dispatch(registerAction({ request }));
    console.log('data to save : ' + JSON.stringify(this.register.value));
    // this.authService.register(request).subscribe((response) => {
    //   console.log('response data from the api : ' + JSON.stringify(response));
    // });
  }
}
