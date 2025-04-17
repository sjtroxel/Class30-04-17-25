import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements AfterViewInit {
  private authService = inject(AuthService);
  private router = inject(Router)
  private cdr = inject(ChangeDetectorRef);
  isAuth = false
  username = '';
  password = '';

ngAfterViewInit(): void {
  this.cdr.detach()
}

  get debugOutput() {
    console.log('[LoginComponent] generated!');
    return ''
  }

  login() {
    let isLoggedIn =
   this.authService.login(this.username, this.password).subscribe((authStatus) => {
     this.isAuth = authStatus
     console.log(this.isAuth);

     if (authStatus) {
      this.router.navigate(['/dashboard'])
     } else {
      alert("Invalid Username or Password")
     }
   });
   this.cdr.detectChanges()



  }
}
