import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.dataSource$ = this.store.select('users');
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

  addUserAction(user: User) {
    this.store.dispatch(ADD_USER(user));
  }

}
