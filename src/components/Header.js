import { NavLink as ReachLink } from 'react-router-dom';

// import { Box, Text, Image, Flex, Spacer } from '@chakra-ui/react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  IconButton,
  Link,
  Text,
  Image,
  Flex,
  Spacer,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import logo from '../img/logo.jpg';

// const NavLink = chakra(Link, {
//   baseStyle: {
//     lineHeight: '40px',
//     paddingLeft: '20px',
//     _hover: {
//       textDecoration: 'none',
//       color: 'blue.100',
//     },
//   },
//   activeStyle: {
//     fontWeight: 'bold',
//     color: 'red',
//   },
// });

const activeStyle = {
  // color: "blue.500",
  color: '#6DB6D7',
  _active: {
    color: 'blue.500',
  },
};

const Header = () => (
  <header>
    <Flex align="center" justifyContent="center">
      <Flex
        bg="#6DB6D7"
        align="center"
        zIndex="10"
        width={{ base: '100%', sm: '100%', md: '1440px' }}
      >
        <Box pl="5px">
          <Link to="/" as={ReachLink}>
            <Image w="60px" h="60px" src={logo} alt="シロマロ" />
          </Link>
        </Box>
        <Spacer />
        <Flex justifyContent="center" align="center" color="white">
          <Text
            fontSize={{ base: '16px', md: '24px', lg: '32px' }}
            pr={5}
            color="white"
          >
            SHIROMARO シロマロ
          </Text>
          <Menu>
            <MenuButton
              mx="5"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem
                to="/"
                color="gray.700"
                as={ReachLink}
                exact
                activeStyle={activeStyle}
              >
                主頁
              </MenuItem>
              <MenuItem
                to="/shiromaker"
                color="gray.700"
                as={ReachLink}
                exact
                activeStyle={activeStyle}
              >
                小白頭貼製造機
              </MenuItem>
              <MenuItem
                href="https://www.instagram.com/shiromaro_painting/"
                color="gray.700"
                as={Link}
                isExternal
                exact
                activeStyle={activeStyle}
              >
                追蹤 IG
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  </header>
);

export default Header;
