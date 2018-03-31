import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { ContactsService } from '../../services/contacts.services';


@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
	contacts : {name : string , addr : string , contact : string, op:string} []=[];
  constructor(public navCtrl: NavController, public navParams: NavParams , public viewCtrl : ViewController,private ctcService : ContactsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }
   public dismiss(): void{
   	this.viewCtrl.dismiss();
   }
ionViewWillEnter(){
    this.contacts=this.ctcService.getContact();
  }
}
