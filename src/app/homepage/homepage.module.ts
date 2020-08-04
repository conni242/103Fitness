import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserProfileComponentModule } from '../user-profile/user-profile.module';
import { HomepagePageRoutingModule } from './homepage-routing.module';
import { RouterModule } from '@angular/router';
import { HomepagePage } from './homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule, 
    UserProfileComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomepagePage
      }
    ])
  ],
  declarations: [HomepagePage]
})
export class HomepagePageModule {}
