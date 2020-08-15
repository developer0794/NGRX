import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../interfaces/appState.interface';
import { RegisterStateInterface } from '../interfaces/registerState.interface';

export const registerFutureSelector = createFeatureSelector<
  AppStateInterface,
  RegisterStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
  registerFutureSelector,
  (registerState: RegisterStateInterface) => registerState.isSubmitting
);

export const validationErrorSelector = createSelector(
  registerFutureSelector,
  (registerState: RegisterStateInterface) => registerState.validationErrors
);
