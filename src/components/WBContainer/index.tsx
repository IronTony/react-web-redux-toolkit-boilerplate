import React, { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/core';

interface IWBContainer {
  children: ReactNode;
  px?: string | number;
}

const WBContainer: FC<IWBContainer> = ({ children, px }) => {
  return (
    <Box mx="auto" height="100%" px={px} pt={{ base: '56px', lg: '0' }}>
      {children}
    </Box>
  );
};

export default WBContainer;
