import WishActionsTypes from "./wishTypes";
import { addItemToWishList, sortByAsc, sortByDesc } from "./wishUtils";

const wishReducer = (state = [], action) => {
  switch (action.type) {
    case WishActionsTypes.ADD_ITEM:
      return addItemToWishList(state, action);

    case WishActionsTypes.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);

    case WishActionsTypes.ASC_ITEM:
      return sortByAsc(state, action);

    case WishActionsTypes.DESC_ITEM:
      return sortByDesc(state, action);

    default:
      return state;
  }
};

export default wishReducer;
