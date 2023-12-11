import { Container } from "@mantine/core";
import Carousel from "../components/Carousel/Carousel";

export default function HomePage() {
  return (
    <Container p={0} size={"xl"} fluid>
      <section style={{ height: "100vh", backgroundColor: "red" }}>
        <Carousel />
      </section>
    </Container>
  );
}
