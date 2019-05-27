import { GET_PROFILE, PROFILE_ERROR } from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  isLoading: true,
  repos: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        isLoading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
}
