import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/core';
import WBMenu from 'components/WBMenu';
import { palette } from 'theme/theme';

const WBHeader: FC = () => {
  return (
    <Box
      shadow="0 5px 10px 0px rgba(0, 0, 0, 0.15)"
      position={{ base: 'fixed', lg: 'relative' }}
      w="100%"
      zIndex={{ base: 9999, lg: 99 }}
    >
      <Flex as="nav" align="center" justify="center" wrap="wrap" pt={{ lg: '10px' }} bg={palette.WHITE} w="100%">
        <Flex
          w="100%"
          maxW={{ lg: 'calc(1224px + 106px)' }}
          justify="space-between"
          minH="56px"
          p={{ base: '18px 16px', lg: '0px 55px' }}
          mx="auto"
        >
          <Box display={{ base: 'none', lg: 'flex' }} alignSelf="center" justifyContent="center" flexGrow={1}>
            <WBMenu />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default WBHeader;