import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { combineLatest, debounceTime, distinctUntilChanged, map, Observable, startWith, Subscription, } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from '../user.model';
import { CreateUserComponent } from './create-user/create-user.component';
import { ADD_USER } from './user-listing.actions';


@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'email', 'phone'];
  dataSource$: Observable<User[]>;
  clickedRows = new Set<User>();

  emailSearchControl = new FormControl(['']);
  controlSubscription: Subscription | undefined;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.dataSource$ = combineLatest(
      [this.store.select('users'),
      this.subscribeToUserTyping$()]
    ).pipe(
      map(([users, searchVal]) => {
        if (searchVal && searchVal) {
          return users.filter(item => item.email.search(searchVal)!==-1)
        } else {
          return users;
        }
      })
    ) as any;
  }

  ngOnInit(): void { }

  openCreateUserDialog() {
    const dialogRef = this.dialog.open(CreateUserComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addUserAction(result);
      }
    });
  }

  subscribeToUserTyping$() {
    return this.emailSearchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged(), startWith('')) as Observable<string>

  }

  addUserAction(user: User) {
    this.store.dispatch(ADD_USER(user));
  }


}
