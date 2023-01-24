import S from './main.styled';

const Article = (props) => {
  return (
    <S.ArticleCard {...props}>
      <h3>Delicious Food, Delivered To You</h3>
      <S.TextBox>
        <S.Paragraph>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </S.Paragraph>
        <S.Paragraph>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </S.Paragraph>
      </S.TextBox>
    </S.ArticleCard>
  );
};
export default Article;
