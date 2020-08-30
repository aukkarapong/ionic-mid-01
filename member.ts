import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home'

@Component({
  selector: 'page-member',
  templateUrl: 'member.html'
})
export class MemberPage {
  username: string
  password: string
  constructor(public navCtrl: NavController) {

  }
  login(){
    if(this.username == "admin" && this.password == "1234") {
      alert("Hello")
      this.navCtrl.push(HomePage)
    }
    else{
      alert("Login Again")
      this.navCtrl.push(MemberPage)
    }
  }
  

}
