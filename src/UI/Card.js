import S from './ui.styled';

const Card = (props) => {
  return <S.CardBox {...props}>{props.children}</S.CardBox>;
};
export default Card;
