import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RxjsTestComponent} from './components/rxjs-test/rxjs-test.component';

const routes: Routes = [
  {
    path: 'rxjs',
    component: RxjsTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
