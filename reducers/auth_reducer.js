import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      // On succesful login let's store the token
      return { token: action.payload };

    case FACEBOOK_LOGIN_FAIL:
      return { token: null };

    default:
      return state;
  }
}
