import { css, Global } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
// import { theme } from 'styles/theme';

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          font-style: normal;
          background: ${theme.mainBg};
        }
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }

        ul,
        li,
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
        }

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        button {
          cursor: pointer;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      `}
    />
  );
};
