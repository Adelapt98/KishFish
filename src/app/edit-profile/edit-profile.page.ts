import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  user: FormGroup;
  matchingPasswordsGroup: FormGroup;

  constructor() {
    this.user = new FormGroup({
      name: new FormControl('Mamad', Validators.required),
      family: new FormControl('', Validators.required),
    });

    this.matchingPasswordsGroup = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
      ])),
      confirm_password: new FormControl('')
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });
  }

  ngOnInit() {
  }

}
