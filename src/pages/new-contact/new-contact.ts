import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactsService } from '../../services/contacts.services'

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private ctcService : ContactsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewContactPage');
  }
  newcontact(value: {name : string , addr : string , contact : string ,op:string}){
  	this.ctcService.addContact(value);
  	this.navCtrl.pop();
  }
}
