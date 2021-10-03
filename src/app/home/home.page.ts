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
    // toPrecision ->
    let messageStatus = '';
    this.bmiSir = (this.weightSir / Math.pow(this.heightSir, 2)).toFixed(2);
    if (this.bmiSir < 18) {
      messageStatus = 'Your are under weight';
    } else if (this.bmiSir < 25) {
      messageStatus = "You're normal";
    } else if (this.bmiSir < 30) {
      messageStatus = 'You are overweight';
    } else {
      messageStatus = 'You are OBESE!';
    }

    const toast = await this.toastController.create({
      message: messageStatus,
      duration: 2000,
    });
    toast.present();
  }
}
