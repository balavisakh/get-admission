import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'angular2-cookie/core';

import { CourseComponent } from '../../../shared/popup/course/course.component';
import { LoginRegisterComponent } from '../../../shared/popup/login-register/login-register.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // collegeFilter = {
  //   "budget": [],
  //   "categoryIds": [1, 20],
  //   "cityIds": [],
  //   "courses": [],
  //   "currentPage": 0,
  //   "ratings": [5],
  //   "rowsPerPage": 50,
  //   "searchKey": "",
  //   "sortBy": "name",
  //   "sortDirection": "ASC",
  //   "specializations": [],
  //   "stateIds": [],
  //   "typeIds": []
  // };

  login: boolean = true;
  loginPopUpStatus: boolean = false;
  spinnerStatus: boolean = false;
  collegeType: string;

  collegeFilter = {
    "budgets": [],
    "categoryIds": [],
    "cityIds": [],
    "courses": [],
    "currentPage": 0,
    "ratings": [],
    "rowsPerPage": 0,
    "searchKey": "",
    "sortBy": "name",
    "sortDirection": "DESC",
    "specializations": [],
    "stateIds": [],
    "typeIds": []
  }

  constructor(public dialog: MatDialog,
    public _cookie: CookieService) { }

  openCoursePopup(id) {

    this.dialog.open(CourseComponent, {
      width: '700px',
      data: { title: 'name', id: id }
    });
  }

  logonOrRegisterPopup(loginStatus): any {
    this.loginPopUpStatus = true;

    this.dialog.open(LoginRegisterComponent, {
      width: '700px',
      data: { login: loginStatus }
    });
  }

  getCookieValue(key: string) {
    return this._cookie.get(key);
  }

  setCookieValue(key: string, value) {
    this._cookie.put(key, value);
  }

  resetCollegeFilter() {
    this.collegeFilter = {
      "budgets": [],
      "categoryIds": [],
      "cityIds": [],
      "courses": [],
      "currentPage": 0,
      "ratings": [],
      "rowsPerPage": 0,
      "searchKey": "",
      "sortBy": "name",
      "sortDirection": "DESC",
      "specializations": [],
      "stateIds": [],
      "typeIds": []
    }
  }
}
