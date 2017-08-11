import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { TodoStoreService } from '../../services/todo-store.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
	selector: 'market',
	templateUrl: './market.component.html'
})
export class MarketComponent {
    selected = "market"
}
