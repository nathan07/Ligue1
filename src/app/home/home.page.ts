import { Component } from '@angular/core';

import {MenuController} from '@ionic/angular';

import {NavController} from '@ionic/angular';
import { SquadsPage } from '../squadsPage/squadsPage';

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
        this.navCtrl.navigateForward('../SquadsPage/squadsPage');
        console.log('click equipes');
    }
}
