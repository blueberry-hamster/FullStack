import { RECEIVE_CATEGORIES } from "../actions/category_actions";

const categoryReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
};

export default categoryReducer;