import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstanceService {

  ITEMS_PER_PAGES = [50, 100, 250, 500, 1000];
  COLLEGE_SORT_BY_LIST = [{'displayName':'Rate','name':'rating'},{'displayName':'City','name':'city'},{'displayName':'State','name':'state'},{'displayName':'College Name','name':'collegeName'}]
  COLLEGE_ID_REPLACER = '{collegeId}';
  IMAGE_BASE_URL = 'https://getmyadmission.com/assets/gallery/';
  BROCHURE_BASE_URL = 'https://getmyadmission.com/assets/brochure/';
  LOGO_BASE_URL = 'https://getmyadmission.com/assets/logo/';
  BANNER_BASE_URL = 'https://getmyadmission.com/assets/banner/';
  USER_DATA = 'userData';

  constructor() { }
}
