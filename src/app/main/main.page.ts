import { Component } from '@angular/core';

@Component({
  selector: 'main-home',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage {


  ionViewWillEnter() {
    console.log('MainPage ionViewWillEnter');
  }
  ionViewDidEnter() {
    console.log('MainPage ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('MainPage ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('MainPage ionViewDidLeave');
  }

}
