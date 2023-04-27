import { IconArrow } from './СhooseYourBreakfast.styled';
import {
  Container,
  Title,
  TitleWrap,
  MainText,
  ContainerWrap,
  Description,
  DescriptionAccent,
  LinkRecipes,
} from './СhooseYourBreakfast.styled';

export const СhooseYourBreakfast = () => {
  return (
    <Container>
      <TitleWrap>
        So<Title>Yummy</Title>
      </TitleWrap>
      <MainText>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </MainText>
      <ContainerWrap>
        <Description>
          <DescriptionAccent>Delicious and healthy </DescriptionAccent>way to
          enjoy a variety of fresh ingredients in one satisfying meal
        </Description>
        <LinkRecipes to={`/categories/breakfast`}>
          <p>See recipes</p>
          <IconArrow />
        </LinkRecipes>
      </ContainerWrap>
    </Container>
  );
};
