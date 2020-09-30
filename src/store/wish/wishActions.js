import WishActionsTypes from "./wishTypes";

export const addItem = (item) => ({
  type: WishActionsTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: WishActionsTypes.REMOVE_ITEM,
  payload: parseInt(id),
});

export const ascItem = (data, item) => ({
  type: WishActionsTypes.ASC_ITEM,
  data: data,
  payload: item,
});

export const descItem = (data, item) => ({
  type: WishActionsTypes.DESC_ITEM,
  data: data,
  payload: item,
});
