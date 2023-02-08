import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-tabs',
  templateUrl: './user-tabs.component.html',
  styleUrls: ['./user-tabs.component.scss']
})
export class UserTabsComponent implements OnInit, OnDestroy {

  userDetail$!: Observable<User | undefined>;
  paramsSubscription: Subscription | undefined;
  getUserWithEmailSelector = (emailToFind: string) => (state: AppState) => state.users.find(user => user.email===emailToFind);

  constructor(private activateRoute: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.paramsSubscription = this.activateRoute.params.subscribe((params: any) => {
      this.selectData(params.userEmail)
    })
  }


  selectData(emailToFind: string) {
    this.userDetail$=this.store.select(this.getUserWithEmailSelector(emailToFind));
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
