import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UriService {

  // BASE_URI: String = 'http://74.208.137.154:8083/api/';
  BASE_URI: String = 'https://gma.sharpliquids.com/api/';

  URL_COURSES_CATEGORIES: String = this.BASE_URI + 'courses/categories.json';
  URL_COLLEGES: String = this.BASE_URI + 'colleges/filter.json';
  URL_COURSES_SEARCH: String = this.BASE_URI + 'courses/search.json';
  URL_COLLEGE_DETAILS: String = this.BASE_URI + 'colleges/{collegeId}.json';
  URL_LOGIN: String = this.BASE_URI + 'login.json';
  URL_REGISTER: String = this.BASE_URI + 'users.json';
  URL_CITIES: String = this.BASE_URI + 'cities.json';
  URL_COURSES: String = this.BASE_URI + 'courses.json';
  URL_SPECIALISATION: String = this.BASE_URI + 'specialisation.json';
  URL_STATES: String = this.BASE_URI + 'states.json';


  constructor() { }
}
