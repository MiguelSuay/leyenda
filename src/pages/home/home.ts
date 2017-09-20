import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider} from "../../providers/data/data";
import { CardPage } from '../card/card';
import { Nav, Platform } from 'ionic-angular';
import { ColorProvider } from "../../providers/color/color";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  searchQuery: string = '';
  items: any;
  cardName: any;
  cardNames: any;
  cardRules:any;
  color1: any;
  color2: any;


  constructor(private storage: Storage, private dataProvider: DataProvider,
    public navCtrl: NavController, public colorProvider: ColorProvider) {

      dataProvider.getData()
      .subscribe(
        (response) => {
          this.cardName = response
          dataProvider.getRules()
          .subscribe(
            (response) => {
              this.cardRules = response,
              console.log(response)
              console.log(this.cardRules)
              this.initializeItems()
            },)
          },
          (error) => console.log(error)
        )
        colorProvider.initColor();
        this.color1 = colorProvider.color1;
        this.color2 = colorProvider.color2;
      }
      initializeItems() {
        this.cardNames = this.cardName;

        for(let i in this.cardNames){
          this.cardNames[i].url = "../../assets/mons/"+ this.cardNames[i].clan+".png"
          for (let a in this.cardRules){
            if (this.cardNames[i].name == this.cardRules[a].name){
              this.cardNames[i].ruling = this.cardRules[a].ruling;
            }
          }
        }
        console.log(this.cardName)
      }
      getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();
        this.cardNames = this.cardName;

        // console.log(ev.target.value)
        // console.log(ev.target.value.search(/[A-z]+([:])+[A-z]/))

        if (ev.target.value.search(/[A-z]+([:])+[A-z_0-9]/g) == 0){
          console.log("trial");
          console.log(ev.target.value.match(/[A-z]+([:])+[A-z_0-9]/g));
          let search = ev.target.value.match(/[A-z]+([:])+[A-z_0-9]+/g);

          for ( var i in search) {
            console.log(search[i])
            let val = search[i].split(":");
            let key = val[0];
            let value:any = val[1];


          this.cardNames = this.cardNames.filter((card) => {
              console.log(card[key])
              if (card[key] == undefined){ return }
              return (card[key].toLowerCase().indexOf(value.toLowerCase()) > -1);
            })
          };
        }
        //}
        else {
          // set val to the value of the searchbar
          let val = ev.target.value;

          // if the value is an empty string don't filter the items
          if (val && val.trim() != '') {
            this.cardNames = this.cardName.filter((cardName) => {
              return (cardName.name_canonical.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
            console.log(this.cardNames)
          }
        }

      }
      cardPage(item){
        this.navCtrl.push(CardPage, item)
      }


    }
