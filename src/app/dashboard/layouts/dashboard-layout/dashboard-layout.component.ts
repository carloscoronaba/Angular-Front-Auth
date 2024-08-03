import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {
  private authService= inject(AuthService);
  private router = inject(Router);
  public user = computed(()=>this.authService.currentUser());

  // get user(){
  //   return this.authService.currentUser()
  // }

  onLogout() {
    this.authService.logout();
  }
}
