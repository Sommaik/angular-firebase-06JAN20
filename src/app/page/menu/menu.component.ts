import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private afauth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignOut() {
    this.afauth.auth.signOut()
      .then( _ => this.router.navigate(['login']));
  }

}
