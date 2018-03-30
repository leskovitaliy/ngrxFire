import {Action} from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const INCREMENT = '[Post] Increment';
export const DECREMENT = '[Post] Decrement';
export const RESET = '[Post] Reset';


export class EditText implements Action {
  readonly type = EDIT_TEXT;

  /// user a constructor to send a payload with the action
  constructor(public payload: string) {}
}


export class Increment implements Action {
  readonly type = INCREMENT;
}

export class Decrement implements Action {
  readonly type = DECREMENT;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All
  = Increment
  | Decrement
  | Reset
  | EditText;
