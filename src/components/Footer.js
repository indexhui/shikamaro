import {
    Box,
    // Text,
    Image,
    Flex,
} from '@chakra-ui/react';

import bg from '../assets/images/hero_bg.png';
import kumo1 from '../assets/images/kumo1.png';
import bgLg from '../assets/images/hero_bg_lg.png';
import { Parallax } from 'react-scroll-parallax';

const Footer = () => (
    <Flex align="center" justifyContent="center" flexDirection="column">
        <Flex align="center" width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }} overflow="hidden" flexDirection="column" >
            {/* <Parallax  styleOuter={{ width: '100%',}} className="custom-class" y={[-30, 50]}> */}
            <Box
                // bgImage="url('/shikamaro/static/media/hero_bg.912c6fe9.png')"
                bgImage={[`url('${bg}')`, `url('${bg}')`, `url('${bgLg}')`]}
                bgRepeat="no-repeat"
                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }} height={{ base: "500px", sm: "500px", md: "600px" }}
                position="relative"
                backgroundSize="cover"
            >
                <Parallax x={[100, -80]} y={[0, 160]} tagOuter="figure">
                    <Image marginTop="100px" w={{ base: "180px", sm: "240px", md: "400px" }} height={{ base: "90px", sm: "120px", md: "200px" }} fit="cover" src={kumo1} opacity=".75" alt="シロマロ" />
                </Parallax>
                <Parallax x={[0, 50]} y={[10, 140]} tagOuter="figure">
                    <Image marginTop="100px" w={{ base: "180px", sm: "240px", md: "400px" }} height={{ base: "90px", sm: "120px", md: "200px" }} fit="cover" src={kumo1} alt="シロマロ" />
                </Parallax>
            </Box>
            {/* </Parallax> */}
            <Box py="20px" bgColor="#A3B0B7" color="#fff" w="100%" fontSize="20px" textAlign="center">Copyright © SHIROMARO All Rights Reserved. </Box>
        </Flex>
    </Flex>
);

export default Footer;
