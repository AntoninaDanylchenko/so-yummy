import {
  Container,
  Image,
  Item,
  List,
  Title,
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
              <span>{idx + 1}</span>
              <p>{item.trim()}</p>
            </Item>
          ))}
        </List>
        <Image src={thumb} alt={title} />
      </Container>
    </>
  );
};
