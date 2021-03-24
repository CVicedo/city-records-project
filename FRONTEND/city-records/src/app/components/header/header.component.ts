import { Component } from '@angular/core'
import { AuthService } from '@auth0/auth0-angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'auth0'

  constructor (private router : Router, public auth: AuthService) { }
  loginWithRedirect () {
    this.auth.loginWithRedirect()
  }

  logOut () {
    this.auth.logout()
  }
}
