import { Component } from '@angular/core';

import {MenuController} from '@ionic/angular';

import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(
        private menu: MenuController,
        public navCtrl: NavController
    ) {
        this.menu.enable(true);
        this.menu.open('mainMenu');
    }

    toggleMenu() {
        this.menu.toggle('mainMenu');
    }

    goToSquadsPage() {
        this.navCtrl.navigateForward('/squadsPage');
    }

    goToScorersPage() {
        this.navCtrl.navigateForward('/scorers');
    }
}
