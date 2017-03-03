import * as types from '../actions/actionTypes';

export default function commentReducer(state = [], action) {
  switch (action.type) {

  case types.ACTION_TYPES.ADD_COMMENT:
    return [...state, action.payload.comment];

  case types.ACTION_TYPES.LOAD_COMMENTS:
    return [...state, action.payload.comments];

  default:
    return state;
  }
}
