import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from '../actions/types';

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
    case CLEAR_PROFILE:
      return {
        ...state,
        isLoading: false,
        profile: null,
        repos: []
      };
    default:
      return state;
  }
}
