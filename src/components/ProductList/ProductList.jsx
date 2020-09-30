import React from "react";
import styled from "styled-components";
import List from "../../containers/List/List";

// 상품 리스트 컴포넌트
const ProductList = ({ productViewData, productData, setProductData }) => {
  // 가격 높은 순 정렬 함수
  const sortByDesc = (price) => {
    const compareByDesc = (price) => {
      const orderDesc = (a, b) => {
        let x = a[price];
        let y = b[price];

        if (x > y) return -1;
        if (x < y) return 1;
        return 0;
      };
      return orderDesc;
    };
    let arrayCopy = [...productData];
    arrayCopy.sort(compareByDesc(price));
    setProductData(arrayCopy);
  };

  // 가격 낮은 순 정렬 함수
  const sortByAsc = (price) => {
    const compareByAsc = (price) => {
      const orderAsc = (a, b) => {
        let x = a[price];
        let y = b[price];

        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
      };

      return orderAsc;
    };
    let arrayCopy = [...productData];
    arrayCopy.sort(compareByAsc(price));
    setProductData(arrayCopy);
  };
  return (
    <ProductListComponent>
      <SortButtonBox>
        <SortButton onClick={() => sortByDesc("price")}>
          높은 가격 순
        </SortButton>
        <SortButton onClick={() => sortByAsc("price")}>낮은 가격 순</SortButton>
      </SortButtonBox>
      <List
        productViewData={productViewData}
        productData={productData}
        setProductData={setProductData}
      />
    </ProductListComponent>
  );
};

export default ProductList;

const ProductListComponent = styled.section`
  width: 100%;
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
