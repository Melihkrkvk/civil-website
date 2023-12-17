import {
  Box,
  Button,
  Card,
  Group,
  Paper,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "./HeroSection.module.css";
import Carousel from "../Carousel/Carousel";
import WelcomeCard from "../Card/WelcomeCard/WelcomeCard";
import { IconArrowUpRight, IconPhoneCall } from "@tabler/icons-react";
import Image from "next/image";
import headerImage from "../../public/website-header.png";

const HeroSection = () => {
  return (
    <Box className={classes.box}>
      <div className={classes.text_container}>
        <Title order={1} className={classes.title}>
          {"ALD'YE"}
        </Title>
        <Title order={1} className={classes.title}>
          {"ALD'YE"}
        </Title>
        <Title order={1} className={classes.title}>
          {"ALD'YE"}
        </Title>
        <Title order={1} className={classes.title}>
          {"ALD'YE"}
        </Title>
      </div>
      <Title className={classes.subTitle}>HOŞ GELDİNİZ</Title>
      <div className={classes.btn_container}>
        <Button
          mt={25}
          mb={25}
          mr={25}
          size="70"
          rightSection={
            <ThemeIcon ml={10} mt={5} display={"flex"} bg={"white"} radius={40}>
              <IconPhoneCall color="black" size={20} />
            </ThemeIcon>
          }
          radius={40}
          bg={"black"}
          color="white"
          variant="filled"
          fz={29}
        >
          İletişime geç
        </Button>
        <Button
          rightSection={<IconArrowUpRight />}
          color="black"
          td={"underline"}
          variant="transparent"
          fz={29}
        >
          Hakkımızda daha fazla
        </Button>
      </div>
      <Text fw={500} maw={700}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
        exercitationem sapiente dolor libero accusamus sint molestiae ex
        nesciunt natus cupiditate!
      </Text>
      <Image
        className={classes.image}
        alt="ald inşaat"
        src={headerImage}
        width={0}
        height={0}
      />
    </Box>
  );
};

export default HeroSection;
