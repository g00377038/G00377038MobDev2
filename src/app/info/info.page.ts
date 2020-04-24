import { Component, OnInit } from '@angular/core';

//import to use in-app browser
import {InAppBrowser, InAppBrowserEvent} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private inAppBrowser:InAppBrowser,) { 

  }

  //use InAppBrowser plugin to open link to GOV website
  openBrowserGov(){
    this.inAppBrowser.create('https://www.gov.ie/en/campaigns/c36c85-covid-19-coronavirus/', '_blank')
  }

  //use InAppBrowser plugin to open link to HSE website
  openBrowserHSE(){
    this.inAppBrowser.create('https://www2.hse.ie/coronavirus/?gclid=EAIaIQobChMInarQ8rGB6QIVVOvtCh3VowsmEAAYASAAEgLpovD_BwE&gclsrc=aw.ds', '_blank')
  }

  ngOnInit() {
  }

}
