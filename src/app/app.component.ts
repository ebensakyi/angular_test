import { Component } from '@angular/core';
import { FirstserviceService } from './firstservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Musicloud';

  servVar: string;

  constructor(private _serviceVar: FirstserviceService){
    this.servVar = this._serviceVar.serviceMethod();
  }
}
