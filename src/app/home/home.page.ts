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
  weight = 0;
  height = 0;
  bmiV = 0;

  weightSir;
  heightSir;
  bmiSir;


  constructor(public toastController: ToastController) {}

  calculateHandler() {
    this.bmiV = this.weight / ((this.height / 100) ^ 2);
    console.log(this.bmiV);
    return this.bmiV;
  }

  async calculatePressed() {
    // toFixed ->
    let colorStatus = 'dark'
    let messageStatus = '';
    this.bmiSir = (this.weightSir / Math.pow((this.heightSir/100),2)).toFixed(2)
    if (this.bmiSir < 18) {
      messageStatus = `Your are under weight ${this.bmiSir}`;
      colorStatus = 'danger'
    } else if (this.bmiSir < 25) {
      messageStatus = `"You're normal ${this.bmiSir}`;
      colorStatus = 'success'
    } else if (this.bmiSir < 30) {
      messageStatus = `You are overweight ${this.bmiSir}`;
      colorStatus = 'warning'
    } else {
      messageStatus = `You are OBESE! ${this.bmiSir}`;
      colorStatus = 'danger'
    }

    const toast = await this.toastController.create({
      message: messageStatus,
      color : colorStatus,
      duration: 2000,
    });
    toast.present();
  }

  reset(){
    this.weightSir = 0
    this.heightSir = 0
    this.bmiSir = 0
  }
}
