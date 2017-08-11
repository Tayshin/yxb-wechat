import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavTabComponent } from '../components/common/navTab/nav-tab.component';
import { BottomTabComponent } from '../components/common/bottomTab/bottom-tab.component';

import { PersonComponent } from '../components/pages/person/person.component';
import { MarketComponent } from '../components/pages/market/market.component';

//路由
import { AppRoutingModule } from '../router/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavTabComponent,
    BottomTabComponent,
    PersonComponent,
    MarketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // TodoStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
