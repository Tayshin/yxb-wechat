import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { TodoStoreService } from '../../services/todo-store.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
	selector: 'bottom-tab',
    templateUrl: './bottom-tab.component.html',
    styleUrls: ['./bottom-tab.component.css']
})
export class BottomTabComponent {
    @Input() currentState:string;

}
