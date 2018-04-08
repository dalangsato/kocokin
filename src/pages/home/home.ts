import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { SentPage } from '../sent/sent';
import { RecipPage } from '../recip/recip';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  	public navCtrl: NavController)
  	// public navParams: NavParams{
{ 
 }

	ionViewDidLoad() {
	console.log('ionViewDidLoad SentPage');}

	gotoSent(){
		this.navCtrl.push(SentPage);
	} 	

	gotoRecip(){
		this.navCtrl.push(RecipPage);
	}
}

