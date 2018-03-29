import {Action} from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const LIKE = '[Post] Like';
export const DISLIKE = '[Post] Dislike';
export const RESET = '[Post] Reset';


export class EditText implements Action {
  readonly type = EDIT_TEXT;

  /// user a constructor to send a payload with the action
  constructor(public payload: string) {}
}


export class Like implements Action {
  readonly type = LIKE;
}

export class Dislike implements Action {
  readonly type = DISLIKE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All
  = Like
  | Dislike
  | Reset
  | EditText;
