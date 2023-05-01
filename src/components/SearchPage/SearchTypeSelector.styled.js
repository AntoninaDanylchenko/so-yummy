import styled from '@emotion/styled';
import Select from 'react-select';

export const TypeSelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
  margin-top: 24px;
  margin: 0 auto;

  @media (${p => p.theme.device.tablet}) {
    gap: 18px;
    margin-top: 28px;
  }
  @media (${p => p.theme.device.desktop}) {
    margin-top: 28px;
    gap: 18px;
  }
`;

export const TypeSelector = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.24px;
  color: ${p => p.theme.subtitle};
  @media (${p => p.theme.device.tablet}) {
    font-weight: 500;
    font-size: 14px;
  }
  @media (${p => p.theme.device.desktop}) {
    font-size: 18px;
  }
`;

export const Selector = styled(Select)`
  .Selector__control {
    width: 146px;
    height: 38px;
    padding-left: 8px;
    padding-right: 8px;

    line-height: 0.7;
    letter-spacing: 0.02em;
    font-size: ${p => p.theme.fontSizes[2]};
    text-align: left;
    background-color: ${p => p.theme.background.placeholder};
    color: gray;
    border-radius: ${p => p.theme.radii[1]};
    border: none;
    box-shadow: none;
    cursor: pointer;
    @media (${p => p.theme.device.tablet}) {
      font-size: ${p => p.theme.fontSizes[3]};
      width: 175px;
      height: 41px;
    }
  }
  .Selector__menu {
    margin-top: 0;
    margin-bottom: 0;
    padding: 4px 8px;
    /* background-color: ${p => p.theme.background.placeholder}; */
    background-color: rgba(250, 250, 250, 1);
    height: 76px;
    border-radius: ${p => p.theme.radii[1]};
    font-size: ${p => p.theme.fontSizes[2]};
    border-color: transparent;
  }
  .Selector__option {
    justify-content: center;
    text-align: left;
    margin-bottom: 6px;
    line-height: 0.7;
    letter-spacing: 0.02em;
    color: grey;
    border-radius: ${p => p.theme.radii[1]};
    border: none;
    height: 28px;
    cursor: pointer;
    background-color: rgba(250, 250, 250, 1);
    &:hover,
    &:focus {
      background-color: rgba(217, 217, 217, 0.16);
    }
    @media (${p => p.theme.device.tablet}) {
      font-size: 12px;
    }
  }
`;
