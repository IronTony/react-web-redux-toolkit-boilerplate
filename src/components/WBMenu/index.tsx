import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Divider } from '@chakra-ui/core';
import { isActivePage } from 'utils';
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
          to="/"
          activeClassName="navbar__link--active"
          className="navbar__link"
          isActive={(match, location) => isActivePage(match, location)}
        >
          Home
        </NavLink>
      </MenuItems>

      <Divider display={{ lg: 'none' }} />

      <MenuItems>
        <NavLink
          to="/another-page"
          activeClassName="navbar__link--active navbar__link--active_orange"
          className="navbar__link"
        >
          Another Page
        </NavLink>
      </MenuItems>
    </>
  );
};

export default WBMenu;
