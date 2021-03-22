import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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

  ngOnInit () {

  }
}
