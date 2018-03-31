import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { ContactsService } from '../../services/contacts.services';
/**
 * Generated class for the FamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-family',
  templateUrl: 'family.html',
})
export class FamilyPage {
	contacts : {name : string , addr : string , contact : string, op:string} []=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController,private ctcService : ContactsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
  }

   public dismiss(): void{
   	this.viewCtrl.dismiss();
   }
   ionViewWillEnter(){
    this.contacts=this.ctcService.getContact();
  }
}
