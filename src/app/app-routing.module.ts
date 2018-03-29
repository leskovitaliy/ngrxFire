import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RxjsTestComponent} from './components/rxjs-test/rxjs-test.component';
import {PostComponent} from './components/post/post.component';

const routes: Routes = [
  {
    path: 'rxjs',
    component: RxjsTestComponent
  },
  {
    path: 'post',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
