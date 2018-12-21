import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  inventory: void;

  constructor(private router: Router, private toastService: ToastService) { }

  async ngOnInit() {
    // this.inventory = await this.loadInventoryFromJson();
    // console.log('this.contacts from ngOninit...', this.contacts)
  }
  showAbout() {
    this.toastService.showToast('success', 5000, 'This application was created by Alan Portillo (c)');

  //   const cart = await this.http.get('assets/inventory.json').toPromise();
  // }

}
