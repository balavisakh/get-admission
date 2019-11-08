
import {Component, Inject,OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ApiService } from '../../../core/services/api-service/api.service';
import { UriService } from '../../../core/services/api-service/uri-services/uri.service';
import { ConstanceService } from '../../../core/services/constance/constance.service';
import { SharedService } from '../../../core/services/shared-service/shared.service';

export interface DialogData {
  title: string;
  id;
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courceList = [];

  ngOnInit() {
    console.log(this.popupData.id);
    this.getCollegeDetails(this._uriService.URL_COLLEGE_DETAILS.replace(this._constanceService.COLLEGE_ID_REPLACER, this.popupData.id))
  }
  constructor(
    public dialogRef: MatDialogRef<CourseComponent>,
    @Inject(MAT_DIALOG_DATA) public popupData: DialogData,
    public _apiService: ApiService,
    public _uriService: UriService,
    public _sharedService: SharedService,
    public _constanceService: ConstanceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getCollegeDetails(url) {
    this._sharedService.spinnerStatus = true;
    this._apiService.fetchData(url).subscribe(
      data => {
        this._sharedService.spinnerStatus = false;
        this.courceList =data['courses'];
      }
    )
  }
}
