import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SquadsPage } from './squadsPage';

const routes: Routes = [
    {
      path: '',
      component: SquadsPage
    }
  ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    declarations: [SquadsPage]
})
export class SquadsPageModule {}
