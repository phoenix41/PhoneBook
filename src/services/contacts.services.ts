export class ContactsService{
	private contacts : {name: string,addr: string, contact : string,op:string}[]=[];

	addContact(con : {name: string,addr: string, contact : string,op:string}){
		this.contacts.push(con);
	}

	getContact(){
		return this.contacts.slice();
	}
	
}