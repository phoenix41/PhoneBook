import { Component } from '@angular/core';
import { NavController,ModalController} from 'ionic-angular';
import { NewContactPage } from '../new-contact/new-contact';
import { ContactsService } from '../../services/contacts.services';
import { FamilyPage } from '../family/family';
import { FriendsPage } from '../friends/friends';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts : {name : string , addr : string , contact : string, op:string} []=[];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private ctcService : ContactsService) {
  		
  }

  public familyclick():void{
       let modal=this.modalCtrl.create(FamilyPage); 
       modal.present();
  }

  public friendsclick():void{
      let modal=this.modalCtrl.create(FriendsPage);  
      modal.present();
  }

  ionViewWillEnter(){
    this.contacts=this.ctcService.getContact();
  }

  newcontact(){
    this.navCtrl.push(NewContactPage);
  }
}
