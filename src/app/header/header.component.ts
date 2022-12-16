import { Component } from '@angular/core';
import { subscribeOn, Subscription} from 'rxjs';
import { UiService } from '../services/ui.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Manager';
  showAddTask: boolean | undefined;
  subscription: Subscription |undefined;
  
  addTask(){
      this.uiService.toggleAddTask();
  }
  
  constructor( private uiService:UiService ){
    this.subscription= this.uiService.onToggle().subscribe(
      (value) =>(this.showAddTask=value ) );
  }
}
