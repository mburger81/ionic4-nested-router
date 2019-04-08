import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'dashboard-home',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {

  id: string;

  constructor(private route: ActivatedRoute) {

  }
  ionViewWillEnter() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave id:', this.id);
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave id:', this.id);
  }
}
