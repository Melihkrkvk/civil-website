"use client";
import {
  Button,
  Card,
  Group,
  Paper,
  SimpleGrid,
  Transition,
} from "@mantine/core";
import classes from "./ServiceCard.module.css";
import { CSSProperties } from "react";
import clsx from "clsx";
import { IconCalculator } from "@tabler/icons-react";

interface ServiceCardProps {
  mt?: number;
  ml?: number;
  mr?: number;
  style?: React.CSSProperties;
  className?: any;
}

const ServiceCard = ({ mt, ml, style, className }: ServiceCardProps) => {
  return (
    <>
      <Card
        mt={mt}
        ml={ml}
        style={style}
        className={clsx([classes.card, className])}
      >
        <IconCalculator className={classes.icon} />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt atque
        optio fugiat modi, alias amet a asperiores, voluptate ab sed numquam
        commodi sequi ducimus voluptatibus voluptatum placeat nihil provident
        quibusdam debitis! Tempora cupiditate quidem esse. Quidem illum aperiam
        nobis nesciunt consequuntur assumenda, a tenetur inventore sint? Optio
        impedit modi vel, iure culpa beatae deserunt error accusamus, veniam
        itaque nesciunt in?
      </Card>
    </>
  );
};

export default ServiceCard;
