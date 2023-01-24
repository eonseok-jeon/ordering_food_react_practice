import S from './ui.styled';

const Button = (props) => {
  return <S.ButtonCss {...props}>{props.children}</S.ButtonCss>;
};
export default Button;
