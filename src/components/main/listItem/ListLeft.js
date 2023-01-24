import S from './listItem.styled';

const ListLeft = (props) => {
  return (
    <S.LeftBox>
      <S.Label>{props.title}</S.Label>
      <S.ContentParagraph>{props.paragraph}</S.ContentParagraph>
      <S.PriceParagraph>{props.price}</S.PriceParagraph>
    </S.LeftBox>
  );
};
export default ListLeft;
