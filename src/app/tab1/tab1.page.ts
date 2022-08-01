import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private navCtrl:NavController
  ) {}

  option = {
    slidesPerView:1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween:10,
    autoplay: true,

  }

clickItem1(){

  this.navCtrl.navigateForward('item1');
}
clickItem2(){

  this.navCtrl.navigateForward('item2');
}
clickItem3(){

  this.navCtrl.navigateForward('item3');
}
clickItem4(){

  this.navCtrl.navigateForward('item4');
}
clickItem5(){

  this.navCtrl.navigateForward('item5');
}
clickItem6(){

  this.navCtrl.navigateForward('item6');
}
clickItem7(){

  this.navCtrl.navigateForward('item7');
}
clickItem8(){

  this.navCtrl.navigateForward('item8');
}
clickItem9(){

  this.navCtrl.navigateForward('item9');
}
clickItem10(){

  this.navCtrl.navigateForward('item10');
}
clickItem11(){

  this.navCtrl.navigateForward('item11');
}
clickItem12(){

  this.navCtrl.navigateForward('item12');
}
clickItem13(){

  this.navCtrl.navigateForward('item13');
}
clickItem14(){

  this.navCtrl.navigateForward('item14');
}
clickItem15(){

  this.navCtrl.navigateForward('item15');
}
clickItem16(){

  this.navCtrl.navigateForward('item16');
}
}
