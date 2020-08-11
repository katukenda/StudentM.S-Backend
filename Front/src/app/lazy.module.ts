import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
      path: '',
      component: CourseFeeComponent,

  },

]

@NgModule({
  declarations: [CourseFeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LazyModule { }
