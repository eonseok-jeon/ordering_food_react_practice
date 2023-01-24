import React from 'react';
import S from './components.styled';

const Nav = () => {
  return (
    <S.Navigation>
      <h2>ReactMeals</h2>
      <S.CartButton>
        <S.Paragraph>🛒 Your Cart</S.Paragraph>
        <S.CartBox>3</S.CartBox>
      </S.CartButton>
    </S.Navigation>
  );
};
export default Nav;
