import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private authService = inject(AuthService);
  isAuth = false;

  constructor() {
    this.authService.getAuthStatus().subscribe((authStatus) => {
      this.isAuth = authStatus;
      console.log(this.isAuth);
    });
  }

  get debugOutput() {
    console.log('[NavbarComponent] generated!');
    return ''
  }

  logoutHandler() {
    this.authService.logout();
  }
}
