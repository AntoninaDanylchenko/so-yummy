import { IconArrow } from './СhooseYourBreakfast.styled';
import { Title, TitleWrap, LinkRecipes } from './СhooseYourBreakfast.styled';

export const СhooseYourBreakfast = () => {
  return (
    <div>
      <TitleWrap>
        So<Title>Yummy</Title>
      </TitleWrap>
      <p>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </p>
      <div>
        <p>
          <span>Delicious and healthy</span>way to enjoy a variety of fresh
          ingredients in one satisfying meal
        </p>
        <LinkRecipes to={`/categories/breakfast`}>
          <p>See recipes</p>
          <IconArrow />
        </LinkRecipes>
      </div>
    </div>
  );
};
