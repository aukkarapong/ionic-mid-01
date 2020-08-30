import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MemberPage } from '../member/member';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  member(){
    this.navCtrl.push(MemberPage)
  }
  register(){
    this.navCtrl.push(RegisterPage)
  }

}
