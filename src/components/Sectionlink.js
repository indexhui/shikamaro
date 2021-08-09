import {
    Text,
    Image,
    Flex,
    Link,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import avatarIg from '../assets/images/avatar_ig.png';
import avatarFb from '../assets/images/avatar_fb.png';
import avatarIgEn from '../assets/images/avatar_ig_en.png';
import avatarIgDaily from '../assets/images/avatar_ig_daily.png';
import avatarYt from '../assets/images/avatar_yt.png';

const themeColor01 = "#6DB6D7";
const themeColor02 = "#A3B0B7";

const linkInfo = [
    {
        place: 'Instagram',
        title: 'シロマロ',
        link: 'https://www.instagram.com/shikamaro_painting/',
        bgColor: themeColor01,
        avatar: avatarIg
    },
    {
        place: 'Facebook',
        title: 'シロマロ',
        link: 'https://www.facebook.com/shikamaropainting',
        bgColor: themeColor02,
        avatar: avatarFb
    },
    {
        place: 'Instagram',
        title: 'English ver',
        link: 'https://www.instagram.com/shikamaro_painting_en/',
        bgColor: themeColor02,
        avatar: avatarIgEn
    },
    {
        place: 'Clubhouse',
        title: '@shiromaro',
        link: '',
        bgColor: themeColor01,
        avatar: avatarIg
    },
    {
        place: 'Instagram',
        title: '小白的日常',
        link: 'https://www.instagram.com/shikamaro0125/',
        bgColor: themeColor01,
        avatar: avatarIgDaily
    },
    {
        place: 'Youtube',
        title: 'シロマロ',
        link: 'https://www.youtube.com/channel/UCpabpXwMWNfB31IQ8p9KGlw',
        bgColor: themeColor02,
        avatar: avatarYt
    },
];


const Sectionlink = () => (
    <Grid templateColumns={["repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(8, 1fr)", "repeat(12, 1fr)"]} gap={4} my={10} px="1em">


        {
            linkInfo.map((info, index) =>
            (
                <GridItem position="relative" W="100%" colSpan={2} key={index}>
                    <Fade bottom >
                        <Flex W="100%" paddingBottom="100%" bgColor={info.bgColor} borderRadius="8px">
                            <Link href={info.link}>
                                <Flex position="absolute" w="100%" top="0" bottom="0" align="center" justifyContent="center" flexDir="column">
                                    <Image h="50px" w="50pX" fit="cover" src={info.avatar} borderRadius="30px" alt="シロマロ" />
                                    <Text fontSize="20px" color="#fff" >{info.place}</Text>
                                    <Text fontSize="20px" color="#fff" >{info.title}</Text>
                                </Flex>
                            </Link>
                        </Flex>
                    </Fade>
                </GridItem>
            )
            )
        }
    </Grid>
);

export default Sectionlink;
