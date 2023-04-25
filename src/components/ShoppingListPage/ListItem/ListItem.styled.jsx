import styled from '@emotion/styled';
import { ReactComponent as Del } from '../../../images/icon/x-icon.svg';
// import delIcon from '../../../images/icon/delete.svg';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #e0e0e0;
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
  background-color: #ebf3d4;

  width: 60px;
  height: 60px;
  border-radius: 6px;

  @media (${p => p.theme.device.tablet}) {
    width: 93px;
    height: 97px;
    border-radius: 8px;
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
  color: #3e4462;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  margin-left: 10px;
  font-size: 10px;
  line-height: 12px;

  @media (${p => p.theme.device.tablet}) {
    margin-left: 16px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  width: 14px;
  height: 14px;

  @media (${p => p.theme.device.tablet}) {
    right: 45px;
    width: 20px;
    height: 20px;
    border-radius: 8px;
  }

  @media (${p => p.theme.device.desktop}) {
    right: 28px;
  }

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #8baa36;
  }
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
  border-radius: 4px;
  background-color: #8baa36;

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
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;

  @media (${p => p.theme.device.tablet}) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const DelIcon = styled(Del)`
  stroke: #333333;
  width: 14px;
  height: 14px;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (${p => p.theme.device.tablet}) {
    width: 20px;
    height: 20px;
  }

  &:hover {
    stroke: #ffffff;
  }
`;
