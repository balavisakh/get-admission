import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApiService } from '../../../../core/services/api-service/api.service';
import { UriService } from '../../../../core/services/api-service/uri-services/uri.service';
import { ConstanceService } from '../../../../core/services/constance/constance.service';
import { SharedService } from '../../../../core/services/shared-service/shared.service';
import { LoginRegisterComponent } from '../login-register.component'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errroMsg: string;

  constructor(private _formBuilder: FormBuilder,
    public _apiService: ApiService,
    public _uriService: UriService,
    public _constanceService: ConstanceService,
    public _sharedService: SharedService,
    public dialogRef: MatDialogRef<LoginRegisterComponent>,
  ) { }

  ngOnInit() {

    this.registerForm = this._formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
      userType: ['User', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['default', Validators.required]
    });

  }

  register() {
    this._sharedService.spinnerStatus = true;
    this._apiService.postData(this._uriService.URL_REGISTER, JSON.stringify(this.registerForm.value)).subscribe(data => {
      this._sharedService.spinnerStatus = false;
      this._sharedService.setCookieValue(this._constanceService.USER_DATA, data);
      this.dialogRef.close();
    }, error => {
      this._sharedService.spinnerStatus = false;
      if (error.error.error = 'Conflict') {
        this.errroMsg = 'User already exist'
      }

    })


  }
}
