import Card from '../../UI/Card';
import styled from 'styled-components';
import { lighten } from 'polished';

const S = {};

S.ArticleCard = styled(Card)`
  width: 50%;
  padding: 20px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background-color: ${lighten(0.04, '#212529')};
`;
S.TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
S.Paragraph = styled.p`
  text-align: center;
`;
S.ListCard = styled(Card)`
  width: 60%;
  padding: 20px;
  background-color: white;
`;
S.ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
S.ArticleMain = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export default S;
