import {Component, Input} from '@angular/core';
import { NgModel } from '@angular/forms';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Post} from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post$: Observable<Post>;

  text: string;

  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select('post');
    console.log('this.post$', this.post$);
  }

  editText() {
    console.log('this.text', this.text);
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
