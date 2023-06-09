import {
  Container,
  Title,
  List,
  Item,
  Amount,
  Desc,
  Image,
} from './RecipePreparation.styled';

export const RecipePreparation = ({ title, instructions, thumb }) => {
  const instruction = instructions
    .split('.')
    .filter(item => Number.isNaN(Number(parseInt(item))))
    .filter(str => str.trim() !== '');

  return (
    <>
      <Title>Recipe preparation of {title}</Title>
      <Container>
        <List>
          {instruction.map((item, idx) => (
            <Item key={idx}>
              <Amount>{idx + 1}</Amount>
              <Desc>{item.trim()}</Desc>
            </Item>
          ))}
        </List>
        <Image src={thumb} alt={title} />
      </Container>
    </>
  );
};