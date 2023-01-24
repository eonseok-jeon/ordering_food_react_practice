import Button from '../../../UI/Button';
import styled from 'styled-components';

const S = {};

S.Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #e4e4e4;
`;
S.LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 4px;
`;
S.Label = styled.label`
  color: black;
  font-weight: 600;
`;
S.ContentParagraph = styled.p`
  color: black;
  font-style: italic;
`;
S.PriceParagraph = styled.p`
  color: #e8590c;
  font-weight: 600;
`;
S.RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  gap: 4px;
`;
S.AmountParagraph = styled.p`
  color: black;
`;
S.RightUpBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`;
S.Input = styled.input`
  width: 20%;
  color: black;
`;
S.AddButton = styled(Button)`
  padding: 3px 20px;
`;

export default S;
