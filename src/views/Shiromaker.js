import React, { useState } from 'react';
import mergeImages from 'merge-images';
import {
  Box,
  VStack,
  HStack,
  Link,
  Button,
  Grid,
  Text,
} from '@chakra-ui/react';
const shiroItem = {
  background: {
    default: require('../shiromaker/bg/bg01.png').default,
    bg02: require('../shiromaker/bg/bg02.png').default,
    bg03: require('../shiromaker/bg/bg03.png').default,
    bg04: require('../shiromaker/bg/bg04.png').default,
  },
  face: {
    default: require('../shiromaker/face/face01.png').default,
    face02: require('../shiromaker/face/face02.png').default,
    face03: require('../shiromaker/face/face03.png').default,
    face04: require('../shiromaker/face/face04.png').default,
  },
  cloths: {
    default: require('../shiromaker/cloths/cloths01.png').default,
    cloths02: require('../shiromaker/cloths/cloths02.png').default,
  },
  hair: {
    default: require('../shiromaker/hair/naoGray100.png').default,
    hair02: require('../shiromaker/hair/naoGray200.png').default,
    hair03: require('../shiromaker/hair/shiroGray100.png').default,
    hair04: require('../shiromaker/hair/shiroGray200.png').default,
  },
  blush: {
    default: require('../shiromaker/blush/blush01.png').default,
    blush02: require('../shiromaker/blush/blush02.png').default,
  },
  mouth: {
    default: require('../shiromaker/mouth/mouth01.png').default,
    mouth02: require('../shiromaker/mouth/mouth02.png').default,
  },
  eyes: {
    default: require('../shiromaker/eyes/eyes01.png').default,
    eyes02: require('../shiromaker/eyes/eyes02.png').default,
  },
  eyebow: {
    default: require('../shiromaker/eyebow/eyebow01.png').default,
    eyebow02: require('../shiromaker/eyebow/eyebow02.png').default,
    eyebow03: require('../shiromaker/eyebow/eyebow03.png').default,
  },
};

function Shiromaker() {
  const [img, setImg] = useState('');
  // const [option, setOption] = useState('background');
  const [shiro, setShiro] = useState({
    background: shiroItem.background.bg04,
    face: shiroItem.face.default,
    cloths: shiroItem.cloths.default,
    hair: shiroItem.hair.default,
    blush: shiroItem.blush.default,
    mouth: shiroItem.mouth.default,
    eyes: shiroItem.eyes.default,
    eyebow: shiroItem.eyebow.default,
  });

  const imgArr = Object.values(shiro);
  mergeImages(imgArr).then(b64 => setImg(b64));

  const handleRandom = () => {
    function randomProps(object) {
      const keyArr = Object.keys(object);
      const item = keyArr[Math.floor(Math.random() * keyArr.length)];
      return object[item];
    }

    setShiro({
      ...shiro,
      background: randomProps(shiroItem.background),
      face: randomProps(shiroItem.face),
      cloths: randomProps(shiroItem.cloths),
      hair: randomProps(shiroItem.hair),
      blush: randomProps(shiroItem.blush),
      mouth: randomProps(shiroItem.mouth),
      eyes: randomProps(shiroItem.eyes),
      eyebow: randomProps(shiroItem.eyebow),
    });
  };

  return (
    <div>
      <Grid minH="60vh" py={12}>
        <VStack spacing={4}>
          <Text fontSize="2xl" color="gray.500">
            生成器
          </Text>
          <Box
            w="60"
            h="60"
            borderRadius="lg"
            bgImage={imgArr
              .map(src => `url('${src}')`)
              .reverse()
              .join(',')}
            bgRepeat="no-repeat"
            bgSize="cover"
          ></Box>
          <HStack spacing={2}>
            <Button onClick={handleRandom}>Random</Button>
            <Link href={img} download="Shiromaro">
              <Button>Download</Button>
            </Link>
          </HStack>
        </VStack>
      </Grid>
    </div>
  );
}

export default Shiromaker;
