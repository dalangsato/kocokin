import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipPage } from './recip';

@NgModule({
  declarations: [
    RecipPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipPage),
  ],
})
export class RecipPageModule {}
