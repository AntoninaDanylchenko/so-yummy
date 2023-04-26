import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;

  width: 343px;
  gap: 28px;

  @media (${p => p.theme.device.tablet}) {
    width: 704px;
    gap: 32px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 1240px;
    gap: 100px 13px;
  }
`;
export const UnderList = styled.div`
  width: 343px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;

  @media (${p => p.theme.device.tablet}) {
    width: 704px;
    height: 200px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 1240px;
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 343px;
  height: 323px;
  border-radius: 8px;

  @media (${p => p.theme.device.tablet}) {
    width: 336px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 300px;
  }
`;

export const PrewievImg = styled.img`
  display: block;
  width: 343px;

  @media (${p => p.theme.device.tablet}) {
    width: 336px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 300px;
    height: 323px;
  }
`;

export const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 26px;
  left: 18px;

  padding-left: 16px;
  width: 307px;
  height: 52px;
  background: #ffffff;
  border-radius: 8px;

  @media (${p => p.theme.device.tablet}) {
    width: 300px;
  }

  @media (${p => p.theme.device.desktop}) {
    width: 268px;
  }
`;

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #3e4462;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
