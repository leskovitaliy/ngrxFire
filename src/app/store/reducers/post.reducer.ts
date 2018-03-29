import * as PostActions from '../actions/post.actions';
import {Post} from '../models/post.model';

export type Action = PostActions.All;

/// Default app state
const defaultState: Post = {
  text: 'Default post text',
  likes: 0
};

/// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

/// Reducer function
export function postReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, {text: action.payload});

    case PostActions.LIKE:
      return newState(state, {likes: state.likes + 1});

    case PostActions.DISLIKE:
      return newState(state, {likes: state.likes - 1});

    case PostActions.RESET:
      return defaultState;

    default:
      return state;

  }
}


