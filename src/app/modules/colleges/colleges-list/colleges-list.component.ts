import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../../core/services/api-service/api.service';
import { UriService } from '../../../core/services/api-service/uri-services/uri.service';
import { SharedService } from '../../../core/services/shared-service/shared.service';
import { ConstanceService } from '../../../core/services/constance/constance.service';

declare var jquery: any; declare var $: any;

@Component({
  selector: 'app-colleges-list',
  templateUrl: './colleges-list.component.html',
  styleUrls: ['./colleges-list.component.css']
})
export class CollegesListComponent implements OnInit, OnDestroy {

  collegeList = [];
  searchKey:string;
  listRowCount = 0;
  pageSize = this._constanceService.ITEMS_PER_PAGES[0];
  sortBy;
  totalPages = 1;
  currentPage = 1;
  offset = 0;
  pageable;
  totalRecords;
  stateList: any = [];
  citiesList: any = [];
  coursesList: any = [];
  specialisationList: any = [];
  numberOfElements = 0;
  filter
  ratingFilter = [{ 'rate': '1 & Above', 'id': 1, 'checked': false }, { 'rate': '2 & Above', 'id': 2, 'checked': false }, { 'rate': '3 & Above', 'id': 3, 'checked': false }, { 'rate': '4 & Above', 'id': 4, 'checked': false }, { 'rate': '4 & Above', 'id': 4, 'checked': false }]
  typeList = [{ 'type': 'Government', 'id': 1, 'checked': false },
  { 'type': 'Private', 'id': 2, 'checked': false },
  { 'type': 'Deemed', 'id': 3, 'checked': false },
  { 'type': 'Aided', 'id': 4, 'checked': false }]

  budgetList = [{ 'budget': '₹0.00 - ₹100,000.00', 'id': 1, 'checked': false },
  { 'budget': '₹100,001.00 - ₹200,000.00', 'id': 2, 'checked': false },
  { 'budget': '₹200,001.00 - ₹300,000.00', 'id': 3, 'checked': false },
  { 'budget': '₹300,001.00 - ₹10,000,000.00', 'id': 4, 'checked': false }]



  constructor(public _apiService: ApiService,
    public _uriService: UriService,
    private _router: Router,
    public _sharedService: SharedService,
    public _constanceService: ConstanceService) {
    this.getAllState();
    this.getAllCourses();
    this.getAllCities();
  }

  ngOnInit() {
    this.searchKey = this._sharedService.collegeFilter['searchKey'].replace(/%/g,'');
    this.getAllColleges();

    $(document).ready(function () {

      $('.main-inner-list').click(function () {
        var tab_id = $(this).attr('data-tab');


        $('.main-inner-list').removeClass('active_color');
        $('.main_once ').removeClass('active_two');

        $(this).addClass('active_color');
        $("#" + tab_id).addClass('active_two');

      });


    });
    // var div_top = $('.menu').offset().top;

    var div_top = $('.menu');

    $(window).scroll(function () {
      var window_top = $(window).scrollTop() - 0;
      if (window_top > div_top) {
        if (!$('.menu').is('.sticky')) {
          $('.menu').addClass('sticky');
        }
      } else {
        $('.menu').removeClass('sticky');
      }
    });
    $(".filter_det").click(function () {
      var id = $(this).attr('data-id');

      if ($('#' + id).hasClass('d-block')) {
        $('#' + id).removeClass('d-block')
        $('#' + id).addClass("d-none");
      } else {
        $('#' + id).addClass("d-block");
      }




    });

    $(".filter_child").click(function () {

      $(".inner_filter").removeClass("d-block");
      $(".iconcloseopen").removeClass("rotates");
      $(this).find(".inner_filter").addClass("d-block");
      $(this).find(".iconcloseopen").addClass("rotates");
    });


  }

  ngOnDestroy() {
    this._sharedService.resetCollegeFilter();
    this._sharedService.collegeType = '';
  }

  getAllColleges() {
    this.collegeList = [];
    this._sharedService.collegeFilter['rowsPerPage'] = this.pageSize;
    this._sharedService.collegeFilter['currentPage'] = this.currentPage - 1;

    if (this.sortBy) {
      this._sharedService.collegeFilter['sortBy'] = this.sortBy;
    }

    this._sharedService.spinnerStatus = true;
    this._apiService.postData(this._uriService.URL_COLLEGES, this._sharedService.collegeFilter).subscribe(data => {

      this._sharedService.spinnerStatus = false;
      this.collegeList = data['content'];
      this.totalPages = data['totalPages'];
      this.pageable = data['pageable'];
      this.offset = (this.currentPage - 1) * this.pageSize;
      this.totalRecords = data['totalElements'];
      this.numberOfElements = data['numberOfElements'];
    }, error => {
      this._sharedService.spinnerStatus = false;
    })
  }

  showCollegeDetails(collegeId) {
    this._router.navigate(['/colleges/' + collegeId]);
  }

  getAllState() {
    this._apiService.fetchData(this._uriService.URL_STATES).subscribe(data => {
      console.log(data);
      this.stateList = data;
    })
  }

  getAllCities() {
    this._apiService.fetchData(this._uriService.URL_CITIES).subscribe(data => {
      this.citiesList = data;
    })
  }

  getAllCourses() {
    this._apiService.fetchData(this._uriService.URL_COURSES).subscribe(data => {
      this.coursesList = data;
    })
  }

  getAllSpecialisation(specialisationName) {
    this._apiService.fetchData(this._uriService.URL_SPECIALISATION + '?specialisationName=' + specialisationName).subscribe(data => {
      this.specialisationList = data;
    })
  }

  viewBrocher(fileName) {

    if (!fileName) {
      return false;
    }

    if (!this._sharedService.getCookieValue(this._constanceService.USER_DATA)) {
      this._sharedService.logonOrRegisterPopup(true);
    } else {
      window.open(this._constanceService.BROCHURE_BASE_URL + fileName, "_blank");
    }
  }

  applayFilter() {

    const stateFilter = this.stateList
      .filter(opt => opt.checked)
      .map(opt => opt.id);
    this._sharedService.collegeFilter['stateIds'] = stateFilter;

    const cityFilter = this.citiesList
      .filter(opt => opt.checked)
      .map(opt => opt.id);
    this._sharedService.collegeFilter['cityIds'] = cityFilter;

    const coursesFilter = this.coursesList
      .filter(opt => opt.checked)
      .map(opt => opt.courseName);
    this._sharedService.collegeFilter['courses'] = coursesFilter;

    const rateFilter = this.ratingFilter
      .filter(opt => opt.checked)
      .map(opt => opt.id);
    this._sharedService.collegeFilter['ratings'] = rateFilter;


    const typeFilter = this.typeList
      .filter(opt => opt.checked)
      .map(opt => opt.id);
    this._sharedService.collegeFilter['typeIds'] = typeFilter;

    const budgetFilter = this.budgetList
      .filter(opt => opt.checked)
      .map(opt => opt.id);
    this._sharedService.collegeFilter['budgets'] = budgetFilter;

    const specificationFilter = this.specialisationList
      .filter(opt => opt.checked)
      .map(opt => opt.specialisationName);

    this._sharedService.collegeFilter['specializations'] = specificationFilter;

    this.getAllColleges();
  }

  searchFilter(key, value, event) {

    if (!event || event.keyCode === 13) {
      switch (key) {
        case 'state':
          for (let i = 0; i < this.stateList.length; i++) {
            if (!this.stateList[i]['stateName'].toUpperCase().includes(value.toUpperCase())) {
              this.stateList[i]['hidden'] = true;
            } else {
              this.stateList[i]['hidden'] = false;
            }
          }
          break;

        case 'city':
          for (let i = 0; i < this.citiesList.length; i++) {
            if (!this.citiesList[i]['cityName'].toUpperCase().includes(value.toUpperCase())) {
              this.citiesList[i]['hidden'] = true;
            } else {
              this.citiesList[i]['hidden'] = false;
            }
          }
          break;

        case 'course':
          for (let i = 0; i < this.coursesList.length; i++) {
            if (!this.coursesList[i]['abbreviation'].toUpperCase().includes(value.toUpperCase())) {
              this.coursesList[i]['hidden'] = true;
            } else {
              this.coursesList[i]['hidden'] = false;
            }
          }
          break;
        case 'specialisation':
          if (value) {
            this.getAllSpecialisation(value);
          }

          break;
      }
    }

  }
  searchCollege(){
    this._sharedService.collegeFilter['searchKey'] = `%${this.searchKey}%`;
    this.getAllColleges();
  }
}
