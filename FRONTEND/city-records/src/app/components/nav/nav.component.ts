import { Component, OnInit } from '@angular/core'
import { AuthService } from '@auth0/auth0-angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'auth0'

  constructor (private router : Router, public auth: AuthService) { }
  loginWithRedirect () {
    this.auth.loginWithRedirect()
  }

  logOut () {
    this.auth.logout()
  }

  ngOnInit (): void {
  }
}
