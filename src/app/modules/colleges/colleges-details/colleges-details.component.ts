import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { ApiService } from '../../../core/services/api-service/api.service';
import { UriService } from '../../../core/services/api-service/uri-services/uri.service';
import { SharedService } from '../../../core/services/shared-service/shared.service';
import { ConstanceService } from '../../../core/services/constance/constance.service';

declare var jquery: any; declare var $: any;

@Component({
  selector: 'app-colleges-details',
  templateUrl: './colleges-details.component.html',
  styleUrls: ['./colleges-details.component.css']
})
export class CollegesDetailsComponent implements OnInit, OnDestroy {

  collegeId;
  collegeDetails;
  similarColleges = [];

  constructor(public _apiService: ApiService,
    public _uriService: UriService,
    public _router: Router,
    private _activatedRoute: ActivatedRoute,
    public _sharedService: SharedService,
    public _constanceService: ConstanceService) {
    if (this._activatedRoute.snapshot.params['id']) {
      this.collegeId = this._activatedRoute.snapshot.params['id'];
      console.log(this.collegeId);
      this.getCollegeDetails(this._uriService.URL_COLLEGE_DETAILS.replace(this._constanceService.COLLEGE_ID_REPLACER, this.collegeId));
    }
  }

  ngOnInit() {

    console.log(".................................");

    $(document).ready(function () {

      $('.main-inner-list').click(function () {
        var tab_id = $(this).attr('data-tab');


        $('.main-inner-list').removeClass('active_color');
        $('.main_once ').removeClass('active_two');

        $(this).addClass('active_color');
        $("#" + tab_id).addClass('active_two');

      });


    });
    var div_top = $('.menu').offset().top;
    var $gallery = $('.gallery a').simpleLightbox();
    // var div_top = $('.menu');

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
  }

  getCollegeDetails(url) {

    this._sharedService.spinnerStatus = true;
    this._apiService.fetchData(url).subscribe(
      data => {
        this._sharedService.spinnerStatus = false;
        this.collegeDetails = data;
        this.getSimilarColleges(this.collegeDetails['courseCategory']);
      }, error => {
        this._sharedService.spinnerStatus = false;
      }
    )
  }

  getSimilarColleges(categoryId) {
    this._sharedService.collegeFilter['categoryIds'] = categoryId;
    this._apiService.postData(this._uriService.URL_COLLEGES, this._sharedService.collegeFilter).subscribe(
      data => {
        console.log(data);
        this.similarColleges = data['content'];
      }
    )
  }

  viewBrocher(fileName) {
    if (!this._sharedService.getCookieValue(this._constanceService.USER_DATA)) {
      this._sharedService.logonOrRegisterPopup(true);
    } else {
      window.open(this._constanceService.BROCHURE_BASE_URL + fileName, "_blank");
    }
  }

  showCollegeDetails(collegeId) {
    this._router.navigate(['/colleges/' + collegeId]);
  }


}
