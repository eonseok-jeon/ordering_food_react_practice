import S from './listItem.styled';

const ListRight = () => {
  return (
    <S.RightBox>
      <S.RightUpBox>
        <S.AmountParagraph>Amount</S.AmountParagraph>
        <S.Input type='number' />
      </S.RightUpBox>
      <S.AddButton>+ Add</S.AddButton>
    </S.RightBox>
  );
};
export default ListRight;
