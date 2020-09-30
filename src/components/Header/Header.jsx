import React, { useState } from "react";
import styled from "styled-components";

const Header = ({ setCatageryCheck }) => {
  const catageryButton = [0, 1]; // 버튼을 0과 1로 구분
  const [paint, setPaint] = useState(catageryButton[0]);

  const handleCatageryChange = (catageryNum) => {
    setCatageryCheck(catageryNum);
    setPaint(catageryNum);
  };

  return (
    <HeaderComponent>
      <LogoImg src="https://www.myrealtrip.com//webpack/203bb94a1437a3d33bca75e5e77ab705.png"></LogoImg>
      <NavBar>
        <CategoryButtonBox>
          <CategoryButton
            id={catageryButton[0]}
            color={paint}
            onClick={() => handleCatageryChange(catageryButton[0])}
          >
            ProductList
          </CategoryButton>
          <CategoryButton
            id={catageryButton[1]}
            color={paint}
            onClick={() => handleCatageryChange(catageryButton[1])}
          >
            WishList
          </CategoryButton>
        </CategoryButtonBox>
      </NavBar>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-bottom: 1px solid #e9ecef;
  padding: 2em 0;

  position: sticky;
  top: 0;
  z-index: 10;
`;

const LogoImg = styled.img`
  width: 10rem;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const CategoryButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CategoryButton = styled.button`
  padding: 0.8em;
  border-radius: 5px;
  font-size: 1.1rem;
  color: ${(props) => (props.color === props.id ? "#fff" : "#000")};
  background-color: ${(props) => (props.color === props.id ? "#000" : "#fff")};

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 48rem) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 30rem) {
    font-size: 0.7em;
  }
`;
