import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userEmail : String;
  userPassword : String;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage () {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }

    return this.email.hasError('email') ? 'Not a valid email' : ''
  }

  constructor (private router : Router) { }

  ngOnInit (): void {
  }
}
