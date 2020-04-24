import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import to use http
import {HttpClientModule} from '@angular/common/http';

//import to use in-app browser 
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

//import to use Ionic local storage 
import {IonicStorageModule} from '@ionic/storage';

import {FormsModule} from  '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, InAppBrowser,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
