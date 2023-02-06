import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from 'src/app/app.state';
import { User } from '../user.model';
import { ADD_USER } from './user-listing.actions';

export const initialState = 0;

const INITIAL_STATE: User[] = [
  {
    "firstName": "Sawyer",
    "phone": '060872780',
    "email": "e.sawyer@protonmail.ca",
    "lastName": "Espinoza"
  },
  {
    "firstName": "Indigo",
    "phone": '817623738',
    "email": "sherman_indigo@icloud.couk",
    "lastName": "Sherman"
  },
  {
    "firstName": "William",
    "phone": '167877737',
    "email": "w.mcpherson4210@hotmail.couk",
    "lastName": "Mcpherson"
  },
  {
    "firstName": "Owen",
    "phone": '435154555',
    "email": "o.logan@protonmail.ca",
    "lastName": "Logan"
  },
  {
    "firstName": "Laura",
    "phone": '354720148',
    "email": "llaura@yahoo.org",
    "lastName": "Lancaster"
  }
];
export const userReducer = createReducer(
  INITIAL_STATE,
  on(ADD_USER, (state, user) => {
    return [user, ...state]
  })
);



export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return localStorageSync({
    keys: ['users'],
    rehydrate: true // State up when application reloads
  })(reducer);
}


export const metaReducers: Array<MetaReducer<AppState, any>> = [localStorageSyncReducer];
