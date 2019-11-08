import { Component, OnInit } from '@angular/core';
import { SharedService } from '../core/services/shared-service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-construction',
  templateUrl: './on-construction.component.html',
  styleUrls: ['./on-construction.component.css']
})
export class OnConstructionComponent implements OnInit {
  searchKey: any;

  constructor(
    public _sharedService: SharedService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  searchCollege(){
    this._sharedService.collegeFilter['searchKey'] = `%${this.searchKey}%`;
    this._router.navigate(['/colleges']);
  }
}
