import { Component, OnInit, OnDestroy } from '@angular/core';
declare var jquery: any; declare var $: any;
import { Subscription, timer, pipe, interval } from 'rxjs';
import { SharedService } from './core/services/shared-service/shared.service';
import { ConstanceService } from './core/services/constance/constance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gma-ui';
  subscription: Subscription;

  constructor(public _sharedService: SharedService,
    public _constanceService: ConstanceService) {

  }

  ngOnInit() {

    this.showSignUpPopUp();

  }

  showSignUpPopUp() {

    this.subscription = interval(30000).subscribe(val => {
      if (!this._sharedService.loginPopUpStatus && !this._sharedService.getCookieValue(this._constanceService.USER_DATA)) {
        this._sharedService.logonOrRegisterPopup(true);
      }
    });
  }
}
