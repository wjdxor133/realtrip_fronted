import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { connect } from "react-redux";
import { addItem } from "../../store/wish/wishActions";
import { removeItem } from "../../store/wish/wishActions";

const ListItem = ({
  id,
  name,
  img_url,
  price,
  like,
  rating,
  product,
  productData,
  setProductData,
  addItem,
  removeItem,
}) => {
  // wishList에 추가
  const addToWishList = () => {
    const arrayCopy = { ...product, ...product, like: true };
    if (like === false) {
      const whisTrueArray = productData.map((item, idx) => {
        if (item.id === arrayCopy.id) {
          return (productData[idx] = { ...product, ...product, like: true });
        } else {
          return item;
        }
      });
      addItem(arrayCopy);
      setProductData(whisTrueArray);
    } else {
      if (productData) {
        const whisFalseArray = productData.map((item, idx) => {
          if (item.id === arrayCopy.id) {
            return (productData[idx] = { ...product, ...product, like: false });
          } else {
            return item;
          }
        });
        setProductData(whisFalseArray);
      }
      removeItem(id);
    }
  };

  return (
    <ListItemComponent>
      <ListIconBox>
        <AiFillHeart
          size="23"
          color={like ? "red" : "#EEEEEE"}
          onClick={addToWishList}
        />
      </ListIconBox>
      <ListItemImgBox>
        <LazyLoadImage
          src={`${img_url}`}
          alt={`${img_url}`}
          effect="opacity"
          width="100%"
          height="100%"
          border-top-left-radius="4px"
          border-top-right-radius="4px"
        />
      </ListItemImgBox>
      <ListItemName>{name}</ListItemName>
      <RatingBox>
        <Rating defaultRating={rating} maxRating={5} disabled />
      </RatingBox>
      <ListItemPrice>{price}원 / 1인</ListItemPrice>
    </ListItemComponent>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);

const ListItemComponent = styled.li`
  width: 22.5%;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  position: relative;

  @media screen and (max-width: 48rem) {
    width: 28%;
  }

  @media screen and (max-width: 30rem) {
    width: 42.5%;
  }
`;

const ListIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  right: 0;
  margin: 0.7em 0.5em 0 0;

  :hover {
    cursor: pointer;
  }
`;

const ListItemImgBox = styled.div`
  height: 50%;
`;

const ListItemName = styled.h3`
  font-size: 0.9em;
  font-weight: bold;
  margin: 0.5em;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #343a40;

  @media screen and (max-width: 48rem) {
    font-size: 0.7em;
  }

  @media screen and (max-width: 30rem) {
    font-size: 0.3rem;
  }
`;

const ListItemPrice = styled.p`
  font-weight: bold;
  font-size: 1em;
  color: #666d75;
  padding-left: 0.6em;

  @media screen and (max-width: 48rem) {
    font-size: 0.7em;
  }

  @media screen and (max-width: 30rem) {
    font-size: 0.5em;
  }
`;

const RatingBox = styled.div`
  width: 10%;
  height: 10%;
  margin: 0 0 0.5em 0.5em;
`;
