import { ClassState } from '../containers/ClassesPage/logic/state';
import { AuthState } from '../containers/LoginPage/logic/state';

export interface RootState {
    auth: AuthState;
    class: ClassState;
}
