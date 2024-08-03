import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const url = state.url
  // console.log(url)
  // localStorage.setItem('url',url)

  // console.log('isAuthenticatedGuard')
  // console.log({route, state})

  const authService = inject(AuthService)
  const router = inject(Router)
  // console.log({status:authService.authStatus()})

  if(authService.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  router.navigateByUrl('/login')

  return false;
};
