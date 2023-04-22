import styled from '@emotion/styled';

export const Tableheader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  width: 359px;
  height: 38px;
  padding: 10px;
  margin-top: 50px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  background-color: #8baa36;

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
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fafafa;

  @media (${p => p.theme.device.tablet}) {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.03em;
  }
`;
