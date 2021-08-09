import {
    Box,
    Text,
    Image,
    Flex,
    Spacer,
} from '@chakra-ui/react';

import logo from '../img/logo.jpg';



const Header = () => (
    <header>
        <Flex align="center" justifyContent="center">
            <Flex bg="#6DB6D7" align="center" zIndex="10" width={{ base: "100%", sm: "100%", md: "1440px" }}>
                <Box pl="5px">
                    <Image w="60px" H="60px" src={logo} alt="シロマロ" />
                </Box>
                <Spacer />
                <Box justifyContent="center" align="center">
                    <Text fontSize={{ base: "16px", md: "24px", lg: "32px" }} pr={5} color="white">
                        SHIROMARO シロマロ
                </Text>
                </Box>
            </Flex>
        </Flex>
    </header>
);

export default Header;
