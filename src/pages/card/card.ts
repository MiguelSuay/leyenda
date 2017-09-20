import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColorProvider } from "../../providers/color/color";
/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  card:any;
  cardImage:any;
  cardRules:any;
  color1: any;
  color2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, colorProvider: ColorProvider) {
    this.color1 = colorProvider.color1;
    this.color2 = colorProvider.color2;
  }

  ionViewCanEnter() {
    this.card = this.navParams;
    this.cardImage = '../../assets/cards/' + this.card.data.id + '.jpg';
    this.cardRules = this.card.data.ruling;
    console.log(this.card)
    }

}
