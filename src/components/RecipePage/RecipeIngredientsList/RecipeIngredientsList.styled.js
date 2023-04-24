import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 16px 50px 16px;
  @media screen and (min-width: 768px) {
    padding: 50px 32px 96px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 50px 100px 100px 100px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
  margin-bottom: 24px;
  background: #8baa36;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 21px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 21px 40px;
    margin-bottom: 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 18px;
  @media screen and (min-width: 768px) {
    gap: 58px;
  }
  @media screen and (min-width: 1200px) {
    gap: 109px;
  }
`;

export const Desc = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.03em;
  color: #fafafa;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 14px 29px 14px 14px;
  background: #ebf3d4;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 33px 58px 33px 40px;
  }
  @media screen and (min-width: 1200px) {
    padding: 27px 70px 27px 58px;
  }
`;

export const Wrapper1 = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
  @media screen and (min-width: 1200px) {
    gap: 66px;
  }
`;

export const Image = styled.img`
  width: 57px;
  height: 57px;
  @media screen and (min-width: 768px) {
    width: 112px;
    height: 112px;
  }
  @media screen and (min-width: 1200px) {
    width: 128px;
    height: 128px;
  }
`;

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: #3e4462;
  margin: auto 0;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  gap: 26px;
  margin-right: 0;
  @media screen and (min-width: 768px) {
    gap: 68px;
  }
  @media screen and (min-width: 1200px) {
    gap: 116px;
  }
`;

export const Amount = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  color: #fafafa;
  padding: 4px;
  margin: auto 0;
  background: #8baa36;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
    padding: 4px 8px;
  }
`;

export const Checkbox = styled.input`
  width: 18px;
  @media screen and (min-width: 768px) {
    width: 35px;
  }
`;