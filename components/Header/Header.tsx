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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCheck,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  TablerIconsProps,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import Link from "next/link";
import Toggler from "../Toggler/Toggler";
import { headerMenu } from "../../utils/mock";
import { mobileData } from "../../utils/mock";
import { useWindowScroll } from "@mantine/hooks";

const Header = () => {
  const [scroll] = useWindowScroll();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const menuLinks = headerMenu
    .map((item, index) => {
      const megaMenuItems = item.megaMenuLinks?.map((item, key) => {
        return (
          <UnstyledButton className={classes.subLink} key={key}>
            <Group wrap="nowrap" align="flex-start">
              <ThemeIcon size={34} variant="default" radius="md">
                <item.icon
                  style={{ width: rem(22), height: rem(22) }}
                  color={theme.colors.blue[6]}
                />
              </ThemeIcon>
              <div>
                <Text size="sm" fw={500}>
                  {item.title}
                </Text>
                <Text size="xs" c="dimmed">
                  {item.description}
                </Text>
              </div>
            </Group>
          </UnstyledButton>
        );
      });

      if (item.isMega) {
        return (
          <>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      {item.label}
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>{item.megaMenuSettings?.title}</Text>
                  <Anchor href={item.megaMenuSettings?.viewAllLink} fz="xs">
                    {item.megaMenuSettings?.viewAllTitle}
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {megaMenuItems}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        {item.megaMenuSettings?.footerTitle}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {item.megaMenuSettings?.footerDescp}
                      </Text>
                    </div>
                    <Button variant="default">
                      {item.megaMenuSettings?.footerButtonTitle}
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          </>
        );
      }
      return (
        <>
          <Link href={item.link} className={classes.link}>
            {item.label}
          </Link>
        </>
      );
    })
    .flat();

  const mobileMenuLinks = mobileData
    .map((item, index) => {
      const megaMenuItems = item.megaMenuLinks?.map((megaLinks, key) => {
        return (
          <UnstyledButton className={classes.subLink} key={megaLinks.title}>
            <Group wrap="nowrap" align="flex-start">
              <ThemeIcon size={34} variant="default" radius="md">
                <megaLinks.icon
                  style={{ width: rem(22), height: rem(22) }}
                  color={theme.colors.blue[6]}
                />
              </ThemeIcon>
              <div>
                <Text size="sm" fw={500}>
                  {megaLinks.title}
                </Text>
                <Text size="xs" c="dimmed">
                  {megaLinks.description}
                </Text>
              </div>
            </Group>
          </UnstyledButton>
        );
      });

      if (item.isMega) {
        return (
          <>
            <UnstyledButton
              key={item.label + index}
              className={classes.link}
              onClick={toggleLinks}
            >
              <Center inline>
                <Box component="span" mr={5}>
                  {item.label}
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={"theme.colors.orange[5]"}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{megaMenuItems}</Collapse>
          </>
        );
      }
      return (
        <>
          <Link
            key={item.label + index}
            href={item.link}
            className={classes.link}
          >
            {item.label}
          </Link>
        </>
      );
    })
    .flat();

  return (
    <Box>
      <header
        style={{ background: scroll.y > 0 ? "#eefff9" : "transparent" }}
        className={classes.header}
      >
        <Group justify="space-between" h="100%">
          Logo
          <Group h="100%" gap={0} visibleFrom="sm">
            {menuLinks}
          </Group>
          <Group>
            <Toggler />
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {mobileMenuLinks}
          <Divider my="sm" />
          {/* mobile button area */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
export default Header;
