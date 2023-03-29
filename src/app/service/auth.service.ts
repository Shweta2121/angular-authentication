import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError } from 'rxjs';
import APIConstants from '../api.constants';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState$ = new BehaviorSubject<boolean>(this.isAuthenticated());
  public state: RouterStateSnapshot;

  constructor(private http: HttpClient,
    private router: Router
    ) { }


  login(user: any): Observable<any> {
    return this.http.post<any>(`${APIConstants.LOGIN}`, user).pipe(
      map(user => {
        localStorage.setItem("user", JSON.stringify( user.user_data));
        this.authState$.next(true);

        return user;
      }),
      catchError((error: HttpErrorResponse | any) => {
        return throwError(error.error);
      })
    )
  }

  
  get authState(): Observable<boolean> {
    return this.authState$.asObservable();
  }

    /**
   * Check whether the user is authenticated or not
   */
    isAuthenticated(): boolean {
      return !!localStorage.getItem('user');
    }

      // Logout of application
  logout(companyName?: string) {
    localStorage.clear();  
      this.router.navigate(['/login'])
        .then(() => {
          window.location.reload();
        });
  }

    // Get Current User 
    get currentUser(): any {
      return localStorage.getItem('user');
    }
  

    /**
   * Sign up handler
   * @param user
   */
    signup(user: any): Observable<any> {
      return this.http.post<any>(`${APIConstants.SIGNUP}`, user).pipe(
        map(user => {
          return user;
        }),
        catchError((error: HttpErrorResponse | any) => {
          return throwError(error.error);
        })
      )
    }

}
