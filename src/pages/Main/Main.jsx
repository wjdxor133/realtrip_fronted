import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import WishList from "../../containers/WishList/WishList";

const Main = () => {
  const [productViewData, setProductViewData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [catageryCheck, setCatageryCheck] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  // Product 이미지 리스트 받아오기
  useEffect(() => {
    const getProductList = async () => {
      await axios
        .get("/data/data.json")
        .then((res) => {
          setProductData(res.data.data);
          setProductViewData(res.data.data.slice(0, 8));
        })
        .catch((error) => {
          if (error.response.status === 400 || 404) {
            setErrorMessage("데이터를 서버에서 찾을 수 없습니다.");
          } else if (error.response.status === 500 || 503) {
            setErrorMessage("일시적인 오류가 발생했습니다.");
          }
        });
    };
    getProductList();
  }, []);

  // 무한 스크롤 이벤트
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - Math.ceil(scrollTop) === clientHeight) {
      setProductViewData(productData.slice(0, productViewData.length + 4));
    }
  };

  useEffect(() => {
    setProductViewData(productData.slice(0, 12));
  }, [productData]);

  return (
    <MainPage onScroll={handleScroll}>
      <Header setCatageryCheck={setCatageryCheck} />
      {catageryCheck === 0 ? (
        <ProductList
          productViewData={productViewData}
          setProductViewData={setProductViewData}
          productData={productData}
          setProductData={setProductData}
        />
      ) : (
        <WishList />
      )}
      <ErrorText>{errorMessage}</ErrorText>
    </MainPage>
  );
};

export default Main;

const MainPage = styled.main`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const ErrorText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 3em;
`;
