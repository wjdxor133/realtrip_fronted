import React from "react";
import styled from "styled-components";
import List from "../List/List";

import { connect } from "react-redux";
import { ascItem } from "../../store/wish/wishActions";
import { descItem } from "../../store/wish/wishActions";

// 위시 리스트 컴포넌트
const WishList = ({ wishList, ascItem, descItem }) => {
  return (
    <WishListComponent>
      <SortButtonBox>
        <SortButton onClick={() => descItem(wishList, "price")}>
          높은 가격 순
        </SortButton>
        <SortButton onClick={() => ascItem(wishList, "price")}>
          낮은 가격 순
        </SortButton>
      </SortButtonBox>
      <List wishList={wishList} />
      <WishListNoMessage wishList={wishList}>
        "위시 리스트에 담긴 상품이 없습니다."
      </WishListNoMessage>
    </WishListComponent>
  );
};

const mapStateToProps = (state) => ({
  wishList: state.wishList,
});

const mapDispatchToProps = (dispatch) => ({
  ascItem: (data, item) => dispatch(ascItem(data, item)),
  descItem: (data, item) => dispatch(descItem(data, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);

const WishListComponent = styled.section`
  width: 100%;
`;

const WishListNoMessage = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  display: ${(props) => (props.wishList.length > 0 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  margin-top: 5em;
`;

const SortButtonBox = styled.div`
  width: 70%;
  margin: 0.5em auto;
  text-align: right;
`;

const SortButton = styled.span`
  font-size: 1em;
  padding: 0.5em;

  :hover {
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (max-width: 48rem) {
    font-size: 0.8em;
  }

  @media screen and (max-width: 30rem) {
    font-size: 0.6em;
  }
`;
