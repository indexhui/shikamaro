import React, { useState, useEffect } from 'react';
import mergeImages from 'merge-images';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import shiroface from '../shiroface';
import { title } from '../shiroface/title';
import {
  VStack,
  HStack,
  Link,
  Button,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { DownloadIcon, RepeatIcon } from '@chakra-ui/icons';
import { FiInstagram } from 'react-icons/fi';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const options = Object.keys(shiroface);

function Shiromaker() {
  const [img, setImg] = useState('');
  const [shiro, setShiro] = useState({
    bg: shiroface.bg[0],
    face: shiroface.face[0][0],
    blush: shiroface.blush[0],
    hair: shiroface.hair[0][0],
    mole: shiroface.mole[0],
    clothes: shiroface.clothes[0],
    mouth: shiroface.mouth[0],
    eyes: shiroface.eyes[0],
    eyebrow: shiroface.eyebrow[0],
  });

  const imgArr = Object.values(shiro);
  mergeImages(imgArr).then(b64 => setImg(b64));
  useEffect(() => {
    mergeImages(imgArr).then(b64 => setImg(b64));
  }, [imgArr]);

  const handClick = option => e => {
    // e.preventDefault();
    const value = e.currentTarget.value;
    setShiro({ ...shiro, [option]: value });
  };

  const handleRandom = () => {
    function randomArr(arr) {
      const num = Math.floor(Math.random() * arr.length);
      return arr[num];
    }
    function randomDoubleArr(arr) {
      const num = Math.floor(Math.random() * arr.length);
      const num2 = Math.floor(Math.random() * arr[0].length);
      return arr[num][num2];
    }

    setShiro({
      ...shiro,
      bg: randomArr(shiroface.bg),
      face: randomDoubleArr(shiroface.face),
      blush: randomArr(shiroface.blush),
      hair: randomDoubleArr(shiroface.hair),
      clothes: randomArr(shiroface.clothes),
      // mole: randomArr(shiroface.mole),
      mouth: randomArr(shiroface.mouth),
      eyes: randomArr(shiroface.eyes),
      eyebrow: randomDoubleArr(shiroface.eyebrow),
      accessories: randomArr(shiroface.accessories),
    });
  };

  return (
    <div w="100%">
      <VStack py={12} w="100%">
        <VStack spacing={4} w="calc(100% - 20px)">
          <Text fontSize="2xl" color="gray.500" letterSpacing="3px">
            小白頭貼製造機
          </Text>
          <Text fontSize="2xl" color="gray.500" letterSpacing="3px">
            シロマロのアイコンメーカー
          </Text>
          <Text mb="2" fontSize="sm" color="gray.400" letterSpacing="3px">
            僅供作為大頭貼使用，請勿商用
          </Text>
          <VStack
            position="sticky"
            top="0"
            w="100%"
            maxW="720px"
            bgColor="white"
            border="4px"
            rounded="lg"
            borderColor="blue.50"
            zIndex="10"
            py="2"
          >
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
              <Button onClick={handleRandom} leftIcon={<RepeatIcon />}>
                ランダム
              </Button>
              <Link href={img} download="Shiromaro">
                <Button leftIcon={<DownloadIcon />}>ダウンロード</Button>
              </Link>
            </HStack>
          </VStack>
          <Box w="90vw" maxW="720px">
            <Accordion w="100%" allowMultiple allowToggle>
              {options.map((option, key) => (
                <AccordionItem key={key}>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {title[option]}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} w="100%">
                    <Flex wrap="wrap" w="100%">
                      {Array.isArray(shiroface[option][0]) ? (
                        <Box w="100%">
                          <Tabs variant="enclosed" w="100%">
                            <TabList
                              mb="1em"
                              overflowX="scroll"
                              overflowY="hidden"
                              w="100%"
                              h="16"
                            >
                              {shiroface[option].map((innerItem, key) => (
                                <Tab key={key}>
                                  <Box
                                    w="8"
                                    h="8"
                                    bgImage={`url('${innerItem[0]}')`}
                                    bgColor="gray.200"
                                    bgRepeat="no-repeat"
                                    bgSize="cover"
                                  ></Box>
                                </Tab>
                              ))}
                            </TabList>
                            <TabPanels>
                              {shiroface[option].map((innerItem, key) => (
                                <TabPanel key={key} display="flex">
                                  <Flex w="100%" wrap="wrap">
                                    {innerItem.map((img, key) => (
                                      <Button
                                        w="20"
                                        h="20"
                                        key={key}
                                        value={img}
                                        mx="1"
                                        my="1"
                                        rounded="lg"
                                        bgColor="white"
                                        bgImage={`url('${img}')`}
                                        border="2px"
                                        // border={
                                        //   img === shiro[option] ? '2px' : '0'
                                        // }
                                        borderColor={
                                          img === shiro[option]
                                            ? 'gray.300'
                                            : 'gray.100'
                                        }
                                        bgRepeat="no-repeat"
                                        bgSize="cover"
                                        onClick={handClick(option)}
                                        _hover={{ backgroundColor: 'none' }}
                                        _active={{ backgroundColor: 'none' }}
                                      ></Button>
                                    ))}
                                  </Flex>
                                </TabPanel>
                              ))}
                            </TabPanels>
                          </Tabs>
                        </Box>
                      ) : (
                        shiroface[option].map((item, key) => (
                          <Button
                            w="16"
                            h="16"
                            key={key}
                            mx="1"
                            my="1"
                            bgImage={`url('${item}')`}
                            value={item}
                            onClick={handClick(option)}
                            bgColor="white"
                            border="2px"
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            outline="0"
                            borderColor={
                              item === shiro[option] ? 'gray.300' : 'gray.100'
                            }
                            _hover={{ backgroundColor: 'none' }}
                            _active={{
                              backgroundColor: 'none',
                              outline: 'none',
                            }}
                            _focus={{
                              backgroundColor: 'none',
                              outline: 'none',
                            }}
                          ></Button>
                        ))
                      )}
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </VStack>
        <Link
          py="12"
          isExternal
          href="https://www.instagram.com/shiromaro_painting/"
        >
          <Flex align="center" direction="column">
            <Icon fontSize="3xl" as={FiInstagram} mb="2" />
            <Text fontSize="lg" color="gray.500" letterSpacing="3px">
              喜歡的話請追蹤和分享‪‪‪‪❤︎‬‪
            </Text>
            <Text fontSize="lg" color="gray.500" letterSpacing="3px">
              shiromaro_painting
            </Text>
          </Flex>
        </Link>
      </VStack>
    </div>
  );
}

export default Shiromaker;
