import styled from '@emotion/styled';

export const SearchSelectorWrap = styled.div`
  margin: 0 auto;
  text-align: center;
  gap: 0.93rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  @media (${p => p.theme.device.tablet}) {
    gap: 1.125rem;
    margin-top: 1.75rem;
  }
  @media (${p => p.theme.device.desktop}) {
    margin-top: 1.82rem;
  }
`;

export const SearchSelectorLabel = styled.label`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.24px;
  @media (${p => p.theme.device.tablet}) {
    font-weight: 500;
    font-size: 14px;
  }
  @media (${p => p.theme.device.desktop}) {
    font-size: 18px;
  }
`;

export const stylesSelect = theme => {
  return {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: 'transparent',
      border: theme === 'light' ? '#D9D9D9' : '1px solid #FAFAFA33',
      borderRadius: '6px',
      boxShadow: state.isFocused && '0 0 0 1px transparent',
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '1.3',
      letterSpacing: '-0.024px',
      textAlign: 'left',
      width: '146px',
      height: '34px',
      '@media (min-width: 768px)': {
        fontWeight: '500',
        fontSize: '14px',
        width: '175px',
        height: '41px',
      },
      '@media (min-width: 1280px)': {
        fontSize: '18px',
        width: '198px',
        height: '49px',
      },
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles,
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '1.5',
      textAlign: 'left',
      letterSpacing: '-0.02em',
      maxHeight: '200px',
      borderRadius: '6px',
      backgroundColor: theme === 'light' ? ' #ECECEC' : '#8BAA36',
      color: theme === 'light' ? '#FAFAFA' : '#8BAA36',
      '@media (min-width: 768px)': {
        fontSize: '14px',
      },
      '@media (min-width: 1280px)': {
        fontSize: '18px',
      },
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: '#000000',
      backgroundColor: theme === 'light' ? '#FAFAFA' : '#8BAA36',
    }),
    dropdownIndicator: baseStyles => ({
      ...baseStyles,
      color: '#8BAA36',
      opacity: 1,
    }),
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      opacity: 0,
    }),
    menu: baseStyles => ({
      ...baseStyles,
      margin: 0,
    }),
  };
};
