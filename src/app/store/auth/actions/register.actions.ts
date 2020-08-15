import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../types/registerTypes';
import { Register } from '../interfaces/register.interface';
import { Action } from 'rxjs/internal/scheduler/Action';
import { UserDetails } from 'src/app/interfaces/auth/user-detailsinterface.';
import { BackEnd } from 'src/app/interfaces/backEnd/back-end.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: Register }>()
);

export const registerSucessAction = createAction(
  ActionTypes.REGISTER_SUCESS,
  props<{ currentUser: UserDetails }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackEnd }>()
);
