import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from '../components/pages/person/person.component';
import { MarketComponent } from '../components/pages/market/market.component';




const routes: Routes = [
    { path:'', redirectTo:'market',pathMatch:'full'},
    { path: 'market', component: MarketComponent},
    { path: 'person', component: PersonComponent},
];
@NgModule({
  imports: [
      RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}