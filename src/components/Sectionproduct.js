import {
    Text,
    Image,
    Flex,
    Link,
    Grid,
    Box,
    GridItem,
  } from '@chakra-ui/react';

import phoneCase from '../assets/images/phone_case.png';
import lineSticker from '../assets/images/line_sticker.png';
import Fade from 'react-reveal/Fade';

const boxH = ["240px","280px","360"];

const productDetail = [
    {
        name: '犀牛頓手機殼',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdKwAKKBIOcHbBPPh-MNIIKif_P7vF-gvk_M1DKi9mwwMBOzw/viewform/',
        src: phoneCase,
        bgColor:'#B1DDE0',
        color:'#595959',
        key: 1
    },
    {
        name: 'Line 貼圖',
        link: 'https://store.line.me/stickershop/product/12051614/ja?ref=lsh_stickerDetail',
        src: lineSticker,
        bgColor:'#D0B08E',
        color:'#fff',
        key: 2
    },
];

const Sectionproduct = () => (
    
    <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)","repeat(4, 1fr)", "repeat(4, 1fr)"]} gap={10} my={10} px="1em">

        {
            productDetail.map((product, index) => 
                (
                    <GridItem position="relative" W="100%" colSpan={2}  key={index}>
                        <Fade bottom >
                            <Box>
                                <Image w="100%" h={boxH} fit="cover" src={product.src} alt="シロマロ" />
                                <Link href={product.link}>
                                    <Flex  align="center" justifyContent="center" flexDir="column" bgColor={product.bgColor} borderBottomRadius="8px">
                                        <Text fontWeight="bold" fontSize="20px" color={product.color} py="12px">{product.name} </Text>
                                    </Flex>
                                </Link>
                            </Box>
                        </Fade>
                    </GridItem>
                )
            )
        }
    </Grid>
  );
  
  export default Sectionproduct;
  