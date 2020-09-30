// 위시 리스트 항목 추가
export const addItemToWishList = (state, action) => {
  const existingCartItem = state.find((item) => item.id === action.payload.id);

  // 추가 방지
  if (existingCartItem) {
    return state;
  }

  return [...state, action.payload];
};

// 가격 낮은 순 정렬 함수
export const sortByAsc = (state, action) => {
  const compareByAsc = (action) => {
    const orderAsc = (a, b) => {
      let x = a[action.payload];
      let y = b[action.payload];

      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    };
    return orderAsc;
  };

  let arrayCopy = [...action.data];
  arrayCopy.sort(compareByAsc(action));
  state = [];
  return [...state, ...arrayCopy];
};

// 가격 높은 순 정렬 함수
export const sortByDesc = (state, action) => {
  const compareByDesc = (action) => {
    const orderDesc = (a, b) => {
      let x = a[action.payload];
      let y = b[action.payload];

      if (x > y) return -1;
      if (x < y) return 1;
      return 0;
    };
    return orderDesc;
  };

  let arrayCopy = [...action.data];
  arrayCopy.sort(compareByDesc(action));
  state = [];
  return [...state, ...arrayCopy];
};
