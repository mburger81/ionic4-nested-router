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
  ngOnInit() {
    console.log('DashboardPage ngOnInit id:', this.id);
  }
  ngAfterContentInit() {
    console.log('DashboardPage ngAfterContentInit id:', this.id);
  }
  ngAfterViewInit() {
    console.log('DashboardPage ngAfterViewInit id:', this.id);
  }
  ngOnDestroy() {
    console.log('DashboardPage ngOnDestroy id:', this.id);
  }
  ionViewWillEnter() {
    this.id = this.route.snapshot.paramMap.get('id');

    console.log('DashboardPage ionViewWillEnter id:', this.id);
  }
  ionViewDidEnter() {
    console.log('DashboardPage ionViewDidEnter id:', this.id);
  }
  ionViewWillLeave() {
    console.log('DashboardPage ionViewWillLeave id:', this.id);
  }
  ionViewDidLeave() {
    console.log('DashboardPage ionViewDidLeave id:', this.id);
  }
}
