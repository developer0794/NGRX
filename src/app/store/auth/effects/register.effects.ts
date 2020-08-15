import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  registerAction,
  registerSucessAction,
  registerFailureAction,
} from '../actions/register.actions';
import { AuthService } from '../../../services/auth.service';
import { of } from 'rxjs';

@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser) => {
            return registerSucessAction({ currentUser });
          }),
          catchError((err) => {
            return of(registerFailureAction({ errors: err.error.errors }));
          })
        );
      })
    )
  );
}
