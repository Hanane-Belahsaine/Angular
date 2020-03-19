import { Component, OnInit } from '@angular/core';
import { Authservice } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  AuthStatus: boolean;

  constructor(private authservice: Authservice, private router: Router) { }

  ngOnInit(): void {
    this.AuthStatus = this.authservice.isAuth;
  }

 
  OnSignIn() {
    this.authservice.signIn().then(
      () => {
        this.AuthStatus = this.authservice.isAuth;
        this.router.navigate(['appariels']);
      }
    );
  }

  OnSignOut() {
    this.authservice.signOut();
    this.AuthStatus = this.authservice.isAuth;
  }

}
