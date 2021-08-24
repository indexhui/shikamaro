import {
  Text,
  // Image,
  Flex,
  Link,
  Grid,
  Box,
  GridItem,
  keyframes,
  // usePrefersReducedMotion,
} from '@chakra-ui/react';

import easycardLimit from '../assets/images/easycardLimit.png';
import easycard from '../assets/images/easycard.png';
import penker from '../assets/images/penker.png';
import linetheme from '../assets/images/lineTheme.jpg';
import phoneCase from '../assets/images/phone_case.png';
import lineSticker from '../assets/images/line_sticker.png';
import lineStickr01TC from '../assets/images/lineStickr01TC.jpg';
import lineStickr01JP from '../assets/images/lineStickr01JP.jpg';

import assemble1 from '../assets/images/assemble1.png';
import assemble2 from '../assets/images/assemble2.png';
import assemble3 from '../assets/images/assemble3.png';
import assemble4 from '../assets/images/assemble4.png';
import assemble5 from '../assets/images/assemble5.png';
import assemble6 from '../assets/images/assemble6.png';
import assemble7 from '../assets/images/assemble7.png';
import assemble8 from '../assets/images/assemble8.png';
import assemble9 from '../assets/images/assemble9.png';

import Fade from 'react-reveal/Fade';

const boxH = ['240px', '280px', '360px'];

const bgAnimate = keyframes`
   0% { background-image: url('${assemble1}'); }
   10% { background-image: url('${assemble2}'); }
   20% { background-image: url('${assemble3}'); }
   30% { background-image: url('${assemble4}'); }
   40% { background-image: url('${assemble5}'); }
  50% { background-image: url('${assemble6}'); }
  60% { background-image: url('${assemble7}'); }
    70% { background-image: url('${assemble8}'); }
      99% { background-image: url('${assemble9}'); }
       100% { background-image: url('${assemble9}'); }
`;

const animation = `${bgAnimate} 2 1s ease`;
const productDetail = [
  {
    name: '小白直君動起來了！',
    link: 'https://store.line.me/stickershop/product/15268788/',
    src: assemble9,
    bgColor: '#CFE4DB',
    color: '#6D6D6D',
    animation: animation,
    key: 1,
  },
  {
    name: '小白直君第一彈-情侶篇',
    link: 'https://store.line.me/stickershop/product/15265480/',
    src: lineStickr01TC,
    bgColor: '#CFE4DB',
    color: '#6D6D6D',
    key: 1,
  },
  {
    name: '白ちゃんと直君ーカップル編',
    link: 'https://store.line.me/stickershop/product/15261704',
    src: lineStickr01JP,
    bgColor: '#CFE4DB',
    color: '#6D6D6D',
    key: 1,
  },
  {
    name: '夏天的休息片刻 悠遊卡 限量',
    link: 'https://shiromaro_painting.penker.tw/op/994899719317',
    src: easycardLimit,
    bgColor: '#b8BA99',
    color: '#595959',
    key: 1,
  },
  {
    name: '夏天的休息片刻 悠遊卡',
    link: 'https://shiromaro_painting.penker.tw/op/937463519315',
    src: easycard,
    bgColor: '#b8BA99',
    color: '#595959',
    key: 2,
  },
  {
    name: 'line主題登場 空で涼む夏',
    link: 'https://store.line.me/themeshop/product/2c7fdbbb-2c26-470c-a48b-c57d8811db7f?lang=ja&ref=lsh_themeDetail&fbclid=IwAR3l2Hk96YeMVBoa0LqszhoBYablYh6WcA1Cl61WzyW5oQsGNnKS3zkMe3k',
    src: linetheme,
    bgColor: '#B1DDE0',
    color: '#595959',
    key: 3,
  },
  {
    name: 'シロマロ×PENKER ',
    link: 'https://shiromaro_painting.penker.tw/',
    src: penker,
    bgColor: '#A8BA99',
    color: '#595959',
    key: 4,
  },
  {
    name: '犀牛盾手機殼',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdKwAKKBIOcHbBPPh-MNIIKif_P7vF-gvk_M1DKi9mwwMBOzw/viewform',
    src: phoneCase,
    bgColor: '#B1DDE0',
    color: '#595959',
    key: 5,
  },
  {
    name: 'Line 貼圖',
    link: 'https://store.line.me/stickershop/product/12051614/ja?ref=lsh_stickerDetail',
    src: lineSticker,
    bgColor: '#D0B08E',
    color: '#fff',
    key: 6,
  },
];

const Sectionproduct = () => {
  return (
    <Grid
      templateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(6, 1fr)',
        'repeat(6, 1fr)',
      ]}
      gap={10}
      my={10}
      px="1em"
    >
      {productDetail.map((product, index) => (
        <GridItem position="relative" w="100%" colSpan={2} key={index}>
          <Fade bottom>
            <Box>
              <Box
                w="100%"
                h={boxH}
                fit="cover"
                animation={product.animation}
                bgImage={`url('${product.src}')`}
                alt="シロマロ"
                bgRepeat="no-repeat"
                bgPosition="center"
                bgSize="cover"
              />
              <Link href={product.link}>
                <Flex
                  align="center"
                  justifyContent="center"
                  flexDir="column"
                  bgColor={product.bgColor}
                  borderBottomRadius="8px"
                >
                  <Text
                    fontWeight="bold"
                    fontSize="20px"
                    color={product.color}
                    py="12px"
                  >
                    {product.name}{' '}
                  </Text>
                </Flex>
              </Link>
            </Box>
          </Fade>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Sectionproduct;
