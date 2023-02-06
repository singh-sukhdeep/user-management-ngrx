import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabsComponent } from './user-tabs.component';

describe('UserTabsComponent', () => {
  let component: UserTabsComponent;
  let fixture: ComponentFixture<UserTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
