import { Component, OnInit } from '@angular/core';
import * as PostActions from '../../store/actions/post.actions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Post} from '../../store/models/post.model';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post$: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select('post');
    console.log('this.post$', this.post$);
  }

  ngOnInit() {
  }

  like() {
    this.store.dispatch(new PostActions.Like());
  }

  dislike() {
    this.store.dispatch(new PostActions.Dislike());
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  editText() {
    console.log('this.text', this.text);
    this.store.dispatch(new PostActions.EditText(this.text));
  }

}
