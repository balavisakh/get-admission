import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { ApiService } from '../../../../core/services/api-service/api.service';
import { UriService } from '../../../../core/services/api-service/uri-services/uri.service';
import { ConstanceService } from '../../../../core/services/constance/constance.service';
import { SharedService } from '../../../../core/services/shared-service/shared.service';
import { LoginRegisterComponent } from '../login-register.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  failStatus = false;
  errorMsg: string;

  constructor(private _formBuilder: FormBuilder,
    public _apiService: ApiService,
    public _uriService: UriService,
    public _constanceService: ConstanceService,
    public _sharedService: SharedService,
    public dialogRef: MatDialogRef<LoginRegisterComponent>,
  ) { }

  ngOnInit() {

    this.loginForm = this._formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    });

  }

  login() {
    this._sharedService.spinnerStatus = true;
    this._apiService.postData(this._uriService.URL_LOGIN, JSON.stringify(this.loginForm.value)).subscribe(data => {
      this._sharedService.spinnerStatus = false;
      this._sharedService.setCookieValue(this._constanceService.USER_DATA, data['users']);
      this.dialogRef.close();
    }, error => {
      console.log(error);
      this._sharedService.spinnerStatus = false;
      if (error.error.customerMessages[0]) {
        this.errorMsg = error.error.customerMessages[0];
      } else {
        this.errorMsg = 'Login Failed';
      }
    })


  }

}
