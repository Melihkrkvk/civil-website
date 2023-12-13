import { Box, Button, Card, Group, Paper, Text, Title } from "@mantine/core";
import classes from "./HeroSection.module.css";
import Carousel from "../Carousel/Carousel";
import WelcomeCard from "../Card/WelcomeCard/WelcomeCard";

const HeroSection = () => {
  return (
    <Box
      className={classes.box}
      style={{
        position: "relative",
        background:
          "url(" +
          "https://cdn.koc.com.tr/cmscontainer/kocholding/media/koc/00anasayfa/sliders/gelecege-birlikte-desktop.jpg?ext=.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Group>
        <Paper pos={"absolute"} left={"50px"} bg={"transparent"}>
          <Title
            fw={"bold"}
            lts={3}
            c={"white"}
            fz={52}
            ff={"Roboto"}
            tt={"uppercase"}
            order={1}
            mb={30}
          >
            ALD inşaata hoş gelmişen
          </Title>
          <Text mb={30} ff={"roboto"} fz={23} lts={3} fw={"bold"} c={"white"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi et,
            dolor officiis beatae repellendus adipisci corrupti velit autem
            excepturi harum est asperiores, quas culpa deleniti.
          </Text>
          <Button variant="filled" bg={"orange"}>
            Button
          </Button>
        </Paper>
      </Group>
      <Group
        pos={"absolute"}
        /* bg={"red"} */
        w={1000}
        h={1000}
        right={50}
        bottom={10}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <WelcomeCard />
        </div>
      </Group>
    </Box>
  );
};

export default HeroSection;
