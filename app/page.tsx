import { Container } from "@mantine/core";
import Carousel from "../components/Carousel/Carousel";
import HeroSection from "../components/HeroSection/HeroSection";

export default function HomePage() {
  return (
    <Container p={0} size={"xl"} fluid>
      <HeroSection />
    </Container>
  );
}
