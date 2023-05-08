import styled from '@emotion/styled';
import bg from '../../images/motivations/100daysUsingApp300.jpg';

export const MotivationBox = styled.div`
  width: 500px;
  height: 500px;
  background-image: url('${bg}');
  background-size: cover;
`;

export const CloseBtn = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: ${p => p.theme.btnBg};
  top: 275px;
  left: 226px;
  background: rgba(217, 217, 217, 0.138);
  backdrop-filter: blur(27.9764px);
`;

export const MotivationText = styled.p`
  position: relative;
  width: 220px;
  height: 120px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font: ${p => p.theme.fonts.Poppins};
  font-size: ${p => p.theme.fontSizes[8]};
  top: 267px;
  left: 140px;
  color: white;
  background: rgba(217, 217, 217, 0.138);
  backdrop-filter: blur(27.9764px);
`;

export const TextAccent = styled.span`
  color: ${p => p.theme.accent.iconFollow};
`;
