import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {

  name:string;

  constructor(private storage:Storage) { }

  //save user entered "name" value to local storage
  onSaveClicked(){
    console.log(this.name);
    this.storage.set("name", this.name);
  }

  ngOnInit() {
  }

}
