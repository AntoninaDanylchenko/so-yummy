import { Link } from 'react-router-dom';
import { IconArrow } from './ChooseYourBreakfast.styled';
import {
  Title,
  TitleWrap,
  MainText,
  ContainerWrap,
  Description,
  DescriptionAccent,
  WrapLink,
} from './ChooseYourBreakfast.styled';

export const ChooseYourBreakfast = () => {
  document.body.style.overflow = 'auto';

  return (
    <>
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
        <WrapLink>
          <Link to={`/categories/breakfast`}>See recipes</Link>
          <IconArrow />
        </WrapLink>
      </ContainerWrap>
    </>
  );
};
