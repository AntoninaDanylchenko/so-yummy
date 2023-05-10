import styled from '@emotion/styled';
import addMob from '../../images/motivations/addFirstRecipeMobile.jpg';
import addTab from '../../images/motivations/addFirstRecipeTablet.jpg';
import addDesk from '../../images/motivations/addFirstRecipeDesktop.jpg';
import add300 from '../../images/motivations/addFirstRecipe300.jpg';
import VectorMobMin from '../../images/motivations/VectorMobMin.png';
import VectorMob from '../../images/motivations/VectorMob.png';
import VectorTab from '../../images/motivations/VectorTab.png';
import VectorDesk from '../../images/motivations/VectorDesk.png';

export const MotivationBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-image: url('${add300}');
  background-size: cover;
  border-radius: 30px;

  @media ${p => p.theme.device.mobile} {
    width: 375px;
    height: 812px;
    background-image: url('${addMob}');
  }

  @media ${p => p.theme.device.tablet} {
    width: 400px;
    height: 400px;
    background-image: url('${addTab}');
  }

  @media ${p => p.theme.device.desktop} {
    width: 500px;
    height: 500px;
    background-image: url('${addDesk}');
  }
`;

export const Content = styled.div`
  height: 180px;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-image: url('${VectorMobMin}');
  position: relative;
  top: 40px;

  @media ${p => p.theme.device.mobile} {
    width: 299px;
    height: 269px;
    background-image: url('${VectorMob}');
    top: 130px;
  }

  @media ${p => p.theme.device.tablet} {
    width: 268px;
    height: 242px;
    background-image: url('${VectorTab}');
    top: 60px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 268px;
    height: 242px;
    background-image: url('${VectorDesk}');
    top: 90px;
  }
`;

export const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${p => p.theme.btnBg};
  border: none;
  margin-bottom: 14px;
  padding: 9px;

  @media ${p => p.theme.device.mobile} {
    width: 48px;
    height: 48px;
  }

  @media ${p => p.theme.device.tablet} {
    width: 48px;
    height: 48px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 48px;
    height: 48px;
  }
`;

export const MotivationText = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font: ${p => p.theme.fonts.Poppins};
  font-size: ${p => p.theme.fontSizes[6]};
  color: white;
  margin-bottom: 24px;

  @media ${p => p.theme.device.mobile} {
    font-size: ${p => p.theme.fontSizes[9]};
    margin-bottom: 27px;
  }

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes[8]};
    margin-bottom: 28px;
  }

  @media ${p => p.theme.device.desktop} {
    font-size: ${p => p.theme.fontSizes[8]};
    margin-bottom: 28px;
  }
`;

export const TextAccent = styled.span`
  color: ${p => p.theme.accent.iconFollow};
`;
