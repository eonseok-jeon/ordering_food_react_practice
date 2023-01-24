import ListLeft from './ListLeft';
import ListRight from './ListRight';
import S from './listItem.styled';
import React from 'react';

const ListItem = (props) => {
  return (
    <React.Fragment>
      <S.Item>
        <ListLeft
          title={props.title}
          paragraph={props.paragraph}
          price={props.price}
        />
        <ListRight />
      </S.Item>
    </React.Fragment>
  );
};
export default ListItem;
