import { createSelector } from 'reselect';

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
  [getfriends, getAgeLimit],
  (friends, ageLimit) => {
    console.log('getFriendsWithAgeLimit called');
    return friends.filter((item) => item.age <= ageLimit);
  },
);

export const getFriendsWithAgeLimitShowLimit = createSelector(
  [getFriendsWithAgeLimitShowLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => {
    console.log('getFriendsWithAgeShowLimit called');
    return friendsWithAgeLimit.slice(0, showLimit);
  },
);

// 데이터를 가공하는 코드를 분리
