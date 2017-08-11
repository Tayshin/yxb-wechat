import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { TodoStoreService } from '../../services/todo-store.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
	selector: 'person',
    templateUrl: './person.component.html',
    styleUrls:['./person.component.css']
})
export class PersonComponent {
    selected = "person"
    
}
