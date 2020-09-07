import { animate, state, style, transition, trigger } from '@angular/animations';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';

export enum DropdownState {
  OPEN = 'open',
  CLOSED = 'closed',
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('showDropdown', [
      state('closed', style({ height: '0' })),
      state(
        'open',
        style({
          height: '*',
        }),
      ),
      transition('open=>closed', animate('100ms')),
      transition('closed=>open', animate('100ms')),
    ]),
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(private location: Location, private authService: AuthService, public router: Router) {}

  notificationCount = 5;

  private readonly dropdownState = new BehaviorSubject<DropdownState>(DropdownState.CLOSED);

  readonly dropdownState$ = this.dropdownState.asObservable();
  readonly showBackButton$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((res: NavigationEnd) => res.url !== '/engage' && res.url !== '/'),
  );

  private subscription = this.router.events
    .pipe(
      filter((evt) => evt instanceof NavigationEnd),
      tap(() => this.dropdownState.next(DropdownState.CLOSED)),
    )
    .subscribe();

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.dropdownState.complete();
  }

  goBack() {
    this.location.back();
  }

  toggleMenu() {
    this.dropdownState.next(
      this.dropdownState.value === DropdownState.CLOSED ? DropdownState.OPEN : DropdownState.CLOSED,
    );
  }

  logout() {
    this.authService
      .logout()
      .pipe(tap(() => this.toggleMenu()))
      .subscribe();
  }
}
