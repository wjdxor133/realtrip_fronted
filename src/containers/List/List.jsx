import React from "react";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";

import { connect } from "react-redux";

const List = ({ productViewData, productData, setProductData, wishList }) => {
  return (
    <ListComponent>
      <ListBox>
        {productViewData && productViewData
          ? productViewData.map((product) => {
              return (
                <ListItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  img_url={product.img_url}
                  like={product.like}
                  rating={product.rating}
                  price={product.price}
                  product={product}
                  productData={productData}
                  setProductData={setProductData}
                />
              );
            })
          : wishList &&
            wishList.map((wishItem) => {
              return (
                <ListItem
                  key={wishItem.id}
                  id={wishItem.id}
                  name={wishItem.name}
                  img_url={wishItem.img_url}
                  like={wishItem.like}
                  rating={wishItem.rating}
                  price={wishItem.price}
                  product={wishItem}
                />
              );
            })}
      </ListBox>
    </ListComponent>
  );
};

const mapStateToProps = (state) => ({
  wishList: state.wishList,
});

export default connect(mapStateToProps)(List);

const ListComponent = styled.div`
  width: 100%;
`;

const ListBox = styled.ul`
  width: 85%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
`;
