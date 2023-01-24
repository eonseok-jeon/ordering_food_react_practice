import ListItem from './listItem/ListItem';
import S from './main.styled';

const List = (props) => {
  const content = [
    {
      title: 'Sushi',
      paragraph: 'Finest fish and veggies',
      price: '$22.99',
    },
    {
      title: 'Schnitzel',
      paragraph: 'A german specialty!',
      price: '$16.50',
    },
    {
      title: 'Barbecue Burger',
      paragraph: 'American, raw, meaty',
      price: '$12.99',
    },
    {
      title: 'Green Bowl',
      paragraph: 'Healthy...and green...',
      price: '$18.99',
    },
  ];

  return (
    <S.ListCard>
      <S.ItemList {...props}>
        {content.map((elem) => (
          <ListItem
            title={elem.title}
            paragraph={elem.paragraph}
            price={elem.price}
          />
        ))}
      </S.ItemList>
    </S.ListCard>
  );
};
export default List;
