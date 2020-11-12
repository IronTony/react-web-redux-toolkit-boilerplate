import React, { FC, ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/core';

interface IWBContainer {
  children: ReactNode;
  px?: string | number;
  mt?: string | number;
}

const WBContainer: FC<IWBContainer> = ({ children, px, mt = '80px' }) => {
  return (
    <Box mx="auto" px={px} pt={{ base: '56px', lg: '0' }} mt={mt} width="100%">
      <Flex
        align="flex-end"
        px={{ base: '12px' }}
        pt="32px"
        pb="80px"
        // height={{ height: 'calc(100% - 80px)' }}
      >
        <Box maxW={{ lg: '1224px' }} display={{ base: 'none', lg: 'block' }} w="100%" mx="auto">
          <Box>{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default WBContainer;
