import {
    Card,
    PrewievImg,
    TitleWrapper,
    StyledLink,
    Title,
} from "./CategoriesList/CategoriesList.styled";

function CategoryCard(recipe) {
    return (<li key={recipe._id}>
        <StyledLink to={`/recipe/${recipe._id}`}>
            <Card>
                <PrewievImg src={recipe.preview} alt={recipe.title} />
                <TitleWrapper>
                    <Title>{recipe.title}</Title>
                </TitleWrapper>
            </Card>
        </StyledLink>
    </li>
    )
}

export default CategoryCard;