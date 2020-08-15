import { UserDetails } from 'src/app/interfaces/auth/user-detailsinterface.';
import { BackEnd } from 'src/app/interfaces/backEnd/back-end.interface';

export interface RegisterStateInterface {
  isSubmitting: boolean;
  currentUser: UserDetails;
  isLogged: boolean | null;
  validationErrors: BackEnd | null;
}
