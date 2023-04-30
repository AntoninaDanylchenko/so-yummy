import styled from '@emotion/styled';

export const TypeSelectorWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  gap: 0.93rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (${p => p.theme.device.tablet}) {
    gap: 1.125rem;
    margin-top: 1.75rem;
  }
  @media (${p => p.theme.device.desktop}) {
    margin-top: 1.82rem;
  }
`;

export const TypeSelector = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.24px;
  @media (${p => p.theme.device.tablet}) {
    font-weight: 500;
    font-size: 14px;
  }
  @media (${p => p.theme.device.desktop}) {
    width: 198px;
  }
`;
