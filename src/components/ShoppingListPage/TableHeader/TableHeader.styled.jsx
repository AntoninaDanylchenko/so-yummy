import styled from '@emotion/styled';

export const Tableheader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding: 10px;
  width: 359px;
  height: 38px;

  border-radius: ${p => p.theme.radii[2]};
  background-color: ${p => p.theme.accent.mainBtnBg};

  @media (${p => p.theme.device.tablet}) {
    width: 704px;
    height: 58px;
    padding: 20px;
    margin-top: 72px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 1240px;
    height: 60px;
    padding: 21px 40px;
    margin-top: 72px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Interlayer = styled.div`
  width: 24px;

  @media (${p => p.theme.device.tablet}) {
    width: 78px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 142px;
  }
`;

export const TableTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: 18px;
  color: ${p => p.theme.primary.textFooter};

  @media (${p => p.theme.device.tablet}) {
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: 27px;
    letter-spacing: 0.03em;
  }
`;
