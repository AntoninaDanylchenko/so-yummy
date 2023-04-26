import styled from '@emotion/styled';

export const RecipeItem = styled.li`
  width: 343px;
  height: 323px;
  border-radius: ${p => p.theme.radii[2]};
  position: relative;
  @media (${p => p.theme.device.tablet}) {
    width: calc((100% - 32px) / 2);
  }
  @media (${p => p.theme.device.desktop}) {
    width: calc((100% - 42px) / 4);
  }
  a {
    overflow: hidden;
    border-radius: ${p => p.theme.radii[2]};
    :hover img {
      transform: scale(1.25);
      filter: contrast(130%);
    }
  }
`;
export const RecipeTitle = styled.h4`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: 1.25;
  letter-spacing: -0.24px;
  padding: 16px;
  margin: 16px;
  position: absolute;
  bottom: 8px;
  border-radius: ${p => p.theme.radii[2]};
  width: calc(100% - 64px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${p => p.theme.secondary.recipeBg};
  :hover {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    max-width: 100%;
    margin-top: -25px;
    border-radius: ${p => p.theme.radii[1]};
    padding: 4px;
    background-color: #8baa36;
    p {
      width: 100%;
      padding: 5px;
    }
    @media (${p => p.theme.device.desktop}) {
      margin-top: 8px;
    }
  }
`;
export const RecipeImg = styled.img`
  height: 323px;
  width: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.radii[2]};
  transition: all ${p => p.theme.transition};
`;
