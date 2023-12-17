"use client";
import { Container, Grid, GridCol } from "@mantine/core";
import Carousel from "../components/Carousel/Carousel";
import HeroSection from "../components/HeroSection/HeroSection";
import ServiceCard from "../components/Card/ServiceCard/ServiceCard";

import classes from "./page.module.css";

export default function HomePage() {
  return (
    <Container p={0} size={"xl"} fluid>
      <HeroSection />
      <section className={classes.section}>
        <ServiceCard className={classes.card} />
        <ServiceCard className={classes.card} />
        <ServiceCard className={classes.card} />
      </section>
    </Container>
  );
}
