import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegesListComponent } from './colleges-list/colleges-list.component';
import { CollegesDetailsComponent } from './colleges-details/colleges-details.component';

export const routes: Routes = [{
  path: "",
  children: [
    {
      path: "",
      component: CollegesListComponent,
    }, {
      path: "details",
      component: CollegesDetailsComponent,
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegesRoutingModule { }
