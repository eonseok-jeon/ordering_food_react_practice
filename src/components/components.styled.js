import Button from '../UI/Button';
import styled from 'styled-components';

const S = {};

S.Navigation = styled.nav`
  width: 100%;
  padding: 15px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #a03f0f;
  position: fixed;
`;
S.CartButton = styled(Button)`
  width: 30%;
  max-width: 200px;
  min-width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;
S.Paragraph = styled.p`
  font-weight: 600;
`;
S.CartBox = styled.div`
  width: 25%;
  background-color: #a03f0f;
  border-radius: 10px;
  padding: 3px;
`;

export default S;
