import Article from './Article';
import List from './List';
import S from './main.styled';

const Main = () => {
  return (
    <S.ArticleMain>
      <Article />
      <List>123</List>
    </S.ArticleMain>
  );
};
export default Main;
