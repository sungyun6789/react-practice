import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from './redux-helper';
// import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from './';

const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';

const SET_VALUE = 'friends/SET_VALUE';

export const actions = {
  addFriend: (friend = { type: ADD, friend }),
  removeFriend: (friend = { type: ADD, friend }),
  editFriend: (friend = { type: ADD, friend }),
  setValue: createSetValueAction(SET_VALUE),
};

const INITIAL_STATE = {
  friends: [],
  ageLimit: MAX_AGE_LIMIT,
  showLimit: MAX_SHOW_LIMIT,
  name: 'mike',
};

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) =>
    (state.friends = state.friends.filter(
      (friend) => friend.id === action.friend.id,
    )),
  [EDIT]: (state, action) => {
    const index = state.friends.finedIndex(
      (friend) => friend.id === action.friend.id,
    );
    if (index >= 0) {
      state.friends[index] = action.friend;
    }
  },
  [SET_VALUE]: setValueReducer,
});

export default reducer;
