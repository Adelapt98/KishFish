import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user :FormGroup
  constructor() {
    this.user = new FormGroup({
      phone: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

}
