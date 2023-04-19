import { useLocation } from 'react-router-dom';
import { IconSvgSelector } from '../../pages/WelcomePage/IconSvgSelector';

const Logo = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <div>
      {/* <LinkNav to="main" state={{ from: backLink }}> */}
        <IconSvgSelector id="logo-desk-tab" />
      {/* </LinkNav> */}
    </div>
  );
};

export { Logo };

// export const LinkNav = styled(NavLink)`
//   text-decoration: none;
// `;
// export const Icon = styled.div`
//   display: block;
//   width: 68px;
//   height: 68px;
//   margin: 0 auto;
// `;
