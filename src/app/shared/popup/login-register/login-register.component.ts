import { Component, Inject, OnInit, OnDestroy } from '@angular/core';

import { SharedService } from '../../../core/services/shared-service/shared.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  login: boolean;
}

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit, OnDestroy {

  constructor(
    public dialogRef: MatDialogRef<LoginRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public popupData: DialogData,
    public _sharedService: SharedService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._sharedService.loginPopUpStatus = false;
  }

}
