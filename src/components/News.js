import { Text, Flex, Link, Box } from '@chakra-ui/react';
// import Fade from 'react-reveal/Fade';

// const themeColor01 = "#6DB6D7";
// const themeColor02 = "#A3B0B7";

const newsList = [
  {
    title: '關於小白成為圖文作家的總總',
    link: 'https://www.cacucacu.com/strongers/animetor-shiromaro/',
    date: '2021-05-21',
  },
  {
    title: '關於小白如何學習日文',
    link: 'https://www.cacucacu.com/strongers-experience/shiromarosharing/',
    date: '2021-05-21',
  },
];

const News = () => (
  <Flex
    justify="center"
    align="center"
    direction="column"
    // w="100%"
    background="rgba(210,244,253,.35)"
    py="5"
    mx="1em"
  >
    <Box mb="12px">
      <Text fontSize="20px" display="inline">
        News{' '}
      </Text>
      <Text fontSize="20px" display="inline">
        新着情報
      </Text>
    </Box>

    {newsList.map((article, index) => (
      <Box
        key={index}
        direction="column"
        mb="8px"
        width={{ base: '100%', sm: '100%', md: '700px' }}
      >
        <Link href={article.link} maxW="600px">
          <Text
            fontSize="16px"
            color="gray.600"
            float="left"
            textAlign="left"
            pl="12px"
          >
            {article.title}
          </Text>
          <Text
            fontSize="14px"
            color="gray.600"
            float="right"
            textAlign="right"
            pr="12px"
          >
            {article.date}
          </Text>
        </Link>
      </Box>
    ))}
  </Flex>
);

export default News;
