import { Component } from '@angular/core';

@Component({
  selector: 'login-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  ionViewWillEnter() {
    console.log('LoginPage ionViewWillEnter');
  }
  ionViewDidEnter() {
    console.log('LoginPage ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('LoginPage ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('LoginPage ionViewDidLeave');
  }
}
