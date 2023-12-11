"use client";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import Link from "next/link";
import Toggler from "../Toggler/Toggler";
import { usePathname } from "next/navigation";
import path from "path";

const mockdata = [
  {
    title: "Anasayfa",
    link: "/",
    color: "red",
  },
  {
    title: "Hakkımızda",
    link: "/hakkimizda",
    color: "green",
  },
  {
    title: "İletişim",
    link: "/iletisim",
    color: "purple",
  },
];
export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const pathname = usePathname();

  const links = mockdata.map((item: any, index: any) => (
    <Anchor
      data-text={item.title}
      className={classes.link}
      style={{ "--mantine-color-red-5": item.color }}
      key={index}
      component={Link}
      href={item.link}
      data-active={pathname === item.link || undefined}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Group justify="space-between" h="100%">
        LOGO
        <Group gap={30} visibleFrom="sm">
          {links}
        </Group>
        <Group mr={20} visibleFrom="sm">
          <Toggler />
        </Group>
        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
      </Group>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Container h={"100vh"} className={classes.mobileDrawer}>
          <div
            style={{
              display: "flex",
              backgroundColor: "red",
              justifyContent: "space-between",
            }}
          ></div>
          {links}
        </Container>
      </Drawer>
    </header>
  );
}
