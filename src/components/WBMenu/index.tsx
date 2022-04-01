import { Box, Divider } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'routes/routesList';
import { palette } from 'theme/theme';

interface IMenuItems {
  children: ReactNode;
}

const MenuItems: FC<IMenuItems> = ({ children }) => (
  <Box
    textAlign="center"
    pl={{ lg: '8px', xl: '11px' }}
    pr={{ lg: '8px', xl: '11px' }}
    color={palette.WET_ASPHALT}
    fontSize="lg"
    lineHeight="22px"
    minW="130px"
    width="100%"
  >
    {children}
  </Box>
);

const WBMenu: FC = () => {
  return (
    <>
      <MenuItems>
        <NavLink
          to={AppRoutes.HomePage}
          className={({ isActive }) =>
            ['navbar__link', isActive ? 'navbar__link--active_red' : null].filter(Boolean).join(' ')
          }
        >
          Home
        </NavLink>
      </MenuItems>

      <Divider display={{ lg: 'none' }} />

      <MenuItems>
        <NavLink
          to={AppRoutes.AnotherPage}
          className={({ isActive }) =>
            ['navbar__link', isActive ? 'navbar__link--active_orange' : null].filter(Boolean).join(' ')
          }
        >
          Another Page
        </NavLink>
      </MenuItems>

      <MenuItems>
        <NavLink
          to={AppRoutes.PrivatePage}
          className={({ isActive }) =>
            ['navbar__link', isActive ? 'navbar__link--active_green' : null].filter(Boolean).join(' ')
          }
        >
          Private Page
        </NavLink>
      </MenuItems>
    </>
  );
};

export default WBMenu;
