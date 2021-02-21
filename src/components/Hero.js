import {
    Box,
    // Text,
    // Image,
    Flex,
  } from '@chakra-ui/react';

import bg from '../assets/images/hero_bg.png';
import bgLg from '../assets/images/hero_bg_lg.png';
// import { Parallax  } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

const Hero = () => (
    // const heroBg =
    <Flex align="center" justifyContent="center" width="100%">
    <Flex align="center" width={["100%", "100%","100%", "1440px"]} overflow="hidden">
        {/* <Box w="100vw" h="500px" position="relative" borderRadius="0 0 20px 20px" overflow="hidden">
                <Box
                    position="absolute"
                    bgColor="rgba(109,182,215,.8)"
                    color="white"
                    fontSize="20px"
                    w="25px"
                    textAlign="center"
                    py="10px"
                    left="5vw"
                    top="5vw"
                >
                    ようこそ
                </Box>
            <Box
                position="absolute"
                bgColor="rgba(109,182,215,.8)"
                color="white"
                fontSize="20px"
                w="25px"
                textAlign="center"
                py="10px"
                left="15vw"
                top="5vw"
            >
                シロマロです
            </Box>
            <Image w="100vw" h="500px" fit="cover" src={bg}  alt="シロマロ" />
        </Box> */}
        {/* <Parallax className="custom-class" y={[-50, 30]} tagOuter="figure"> */}
            <Box
                // bgImage="url('/shikamaro/static/media/hero_bg.912c6fe9.png')"
                bgImage={[`url('${bg}')`,`url('${bg}')`,`url('${bgLg}')`]}
                bgRepeat="no-repeat"
                w="100vw" 
                h={["500px","600px"]}
                position="relative"
                bgPosition="center"
                backgroundSize="cover"
            >
            <Fade Cascade>
                    <Box
                        position="absolute"
                        bgColor="rgba(109,182,215,.8)"
                        color="white"
                        fontSize={["20px","30px","35px"]}
                        w={["25px","35px","40px"]}
                        textAlign="center"
                        py="10px"
                        left={["40px","70px","150px"]}
                        top="100px"
                    >
                            ようこそ
                    </Box>

            </Fade>
            <Fade>
                    <Box
                        position="absolute"
                        bgColor="rgba(109,182,215,.8)"
                        color="white"
                        fontSize={["20px","30px","35px"]}
                        w={["25px","35px","40px"]}
                        textAlign="center"
                        py="10px"
                        left={["80px","140px","240px"]}
                        top="100px"
                    >
                            シロマロです
                    </Box>
            </Fade>
            </Box>
        {/* </Parallax> */}
    </Flex>
    </Flex>
  );
  
  export default Hero;
  