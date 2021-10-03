import { Component } from '@angular/core';
import {
  ToastController,
  ActionSheetController,
  AlertController,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weight = 0
  height = 0
  bmiV = 0

  weightSir
  heightSir
  bmiSir
  

  constructor(
    public toastController : ToastController
  ) {}

  calculateHandler(){
    this.bmiV = this.weight / ((this.height / 100) ^ 2)
    console.log(this.bmiV)
    return this.bmiV
  }

  async calculatePressed(){
    // toFixed -> 
    // toPrecision ->
    let message = ''
    this.bmiSir = (this.weightSir / Math.pow((this.heightSir),2)).toFixed(2)
    if (this.bmiSir < 18 ){

    } else if (this.bmiSir < 25) {

    } else if (this.bmiSir < 30) {

    } else {

    }
   
      const toast = await this.toastController.create({
        message: 'Your settings have been saved.',
        duration: 2000
      });
      toast.present();
    
  }

}
