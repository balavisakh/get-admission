import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../core/services/api-service/api.service';
import { UriService } from '../../core/services/api-service/uri-services/uri.service';
import { SharedService } from '../../core/services/shared-service/shared.service';
import { ConstanceService } from '../../core/services/constance/constance.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  courseCategories = [];
  topCollegesList = [];
  topEngineeringColleges = [];
  topArtsColleges = [];
  topCources = [];
  selectedCollegeType = 'ENGINEERING';
  searchKey: string;

  constructor(public _apiService: ApiService,
    public _uriService: UriService,
    public _sharedService: SharedService,
    private _router: Router,
    public _constanceService: ConstanceService) {
    
  }

  ngOnInit() {
    this.getAllCategories(this._uriService.URL_COURSES_CATEGORIES, {});
    this.getTopCourses(this._uriService.URL_COURSES_SEARCH);
    this.getTopColleges([1, 20], 'ENGINEERING');
    this.getTopColleges([15, 21], 'ARTS');
    this.getTopColleges([], 'LOCATION');
  }

  getAllCategories(url, body) {
    this._sharedService.spinnerStatus = true;
    this._apiService.postData(url, body).subscribe(data => {
      this._sharedService.spinnerStatus = false;
      this.courseCategories = data['content'];
    }, error => {
      this._sharedService.spinnerStatus = false;
    })
  }

  getTopColleges(categoryId, key) {
    this.topCollegesList = [];
    this._sharedService.collegeFilter['categoryIds'] = categoryId;
    this._apiService.postData(this._uriService.URL_COLLEGES, this._sharedService.collegeFilter).subscribe(
      data => {
        console.log(data);
        switch (key) {
          case "ENGINEERING":
            this.topEngineeringColleges = data['content'];
            break;
          case "ARTS":
            this.topArtsColleges = data['content'];
            break;
          case "LOCATION":
            this.topCollegesList = data['content'];
            break;
          default:
            break;
        }
        this.topCollegesList = data['content'];
      }
    )
  }

  getCategoryValue(index, key) {
    return this.courseCategories[index][key];
  }

  showColleges(index) {
    if (index) {
      const categoryData = this.courseCategories[index]
      const catId = categoryData.categoryIds;
      this._sharedService.collegeFilter['categoryIds'] = catId;
    } else {
      switch (this.selectedCollegeType) {
        case "ENGINEERING":
          this._sharedService.collegeFilter['categoryIds'] = [1, 20];
          this._sharedService.collegeType = this.selectedCollegeType;
          break;
        case "ARTS":
          this._sharedService.collegeFilter['categoryIds'] = [15, 21];
          this._sharedService.collegeType = this.selectedCollegeType;
          break;
        case "LOCATION":
          this._sharedService.collegeFilter['cityIds'] = [1];
          this._sharedService.collegeType = '';
          break;
        default:
          break;
      }
    }
    this._sharedService.collegeFilter['searchKey']="";
    console.log(this._sharedService.collegeType);
    this._router.navigate(['/colleges']);
  }
  searchCollege(){
    this._sharedService.collegeFilter['searchKey'] = `%${this.searchKey}%`;
    this._router.navigate(['/colleges']);
  }
  getTopCourses(url) {
    const filter = {
      "ratings": [
        5
      ]
    };

    this._apiService.postData(url, filter).subscribe(data => {
      this.topCources = data['content']
    })
  }


  showCollegeDetails(collegeId) {
    this._router.navigate(['/colleges/' + collegeId]);
  }

}
