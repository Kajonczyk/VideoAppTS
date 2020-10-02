import { MovieType } from "../actions/moviesActionTypes";

type RootState = {
  movie?: MovieType;
};

const defaultState = {};

export const moviesReducer = (
  state: RootState = defaultState,
  action: any
): RootState => {
  switch (action.type) {
    case "ADD_MOVIE": {
      return {
        movie: action.payload,
      };
    }
    default:
      return state;
  }
};
