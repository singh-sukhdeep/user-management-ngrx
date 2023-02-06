import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';

export const ADD_USER = createAction('[User Listing] ADD_USER', props<User>());
