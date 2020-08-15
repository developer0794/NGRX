import { RegisterStateInterface } from '../interfaces/registerState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  registerAction,
  registerSucessAction,
  registerFailureAction,
} from '../actions/register.actions';

// initializing state

const initialState: RegisterStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLogged: null,
  validationErrors: null,
};

// reducer creating

const registerReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): RegisterStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(registerSucessAction, (state, action) => ({
    ...state,
    isSubmitting: true,
    isLogged: true,
    currentUser: action.currentUser,
    validationErrors: null,
  })),
  on(registerFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
);

// export reducer function

export function reducers(state: RegisterStateInterface, action: Action) {
  return registerReducer(state, action);
}
