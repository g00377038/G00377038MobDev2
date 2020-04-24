import { Component, OnInit } from '@angular/core';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  username:string;
  
  constructor(private storage:Storage) { }

  ngOnInit(){
    //get user entered "name" value from local storage
    this.storage.get("name").then(
      (data)=>{
        this.username=data;
      }
    ).catch(
      (error)=>
      {
        //blank if no name yet entered  (or if there is an error)
        this.username="";
      }
    );
  }
  
  
}
