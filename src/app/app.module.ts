import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { postReducer } from './store/reducers/post.reducer';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FormsModule} from '@angular/forms';
import { RxjsTestComponent } from './components/rxjs-test/rxjs-test.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsTestComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({post: postReducer}),
    StoreDevtoolsModule.instrument({maxAge: 10}) // number of states to retain
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
