import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid ${p => p.theme.borderLine};
  width: 343px;
  height: 84px;

  @media (${p => p.theme.device.tablet}) {
    width: 704px;
    height: 140px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 1160px;
    height: 140px;
  }
`;

export const PosterWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
`;

export const PosterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${p => p.theme.ligthGreen.ingredientBg};

  width: 60px;
  height: 60px;
  border-radius: ${p => p.theme.radii[1]};

  @media (${p => p.theme.device.tablet}) {
    width: 93px;
    height: 97px;
    border-radius: ${p => p.theme.radii[2]};
  }
`;

export const Poster = styled.img`
  display: block;
  width: 48px;
  height: 48px;

  @media (${p => p.theme.device.tablet}) {
    width: 81px;
    height: 81px;
  }
`;

export const PosterTitle = styled.p`
  color: ${p => p.theme.blackText.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  margin-left: 10px;
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 12px;

  @media (${p => p.theme.device.tablet}) {
    margin-left: 16px;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: 24px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 19px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: ${p => p.theme.radii[1]};
  background-color: transparent;
  text-align: center;
  vertical-align: middle;
  color: ${p => p.theme.incrementNumber};

  font-size: ${p => p.theme.fontSizes[3]};
  width: 14px;
  height: 14px;

  @media (${p => p.theme.device.tablet}) {
    right: 45px;
    width: 20px;
    height: 20px;
    font-size: ${p => p.theme.fontSizes[6]};
    border-radius: ${p => p.theme.radii[2]};
  }

  @media (${p => p.theme.device.desktop}) {
    right: 28px;
  }

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const MeasureWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 79px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 23px;
  border-radius: ${p => p.theme.radii[0]};
  background-color: ${p => p.theme.accent.mainBtnBg};

  @media (${p => p.theme.device.tablet}) {
    right: 175px;
    width: 68px;
    height: 35px;
  }

  @media (${p => p.theme.device.desktop}) {
    right: 222px;
  }
`;

export const Measure = styled.p`
  margin: 0;
  padding: 0;
  color: ${p => p.theme.primary.textFooter};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 15px;

  @media (${p => p.theme.device.tablet}) {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 27px;
  }
`;
