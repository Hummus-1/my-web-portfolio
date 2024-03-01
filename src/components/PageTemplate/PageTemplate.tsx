import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Avatar,
  useMantineColorScheme,
  ActionIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';
import classes from './PageTemplate.module.css';
import { routes } from '@/Router';

const colorSchemeIconSources: { [key in 'light' | 'dark']?: any } = {
  light: './src/assets/images/black-moon.png',
  dark: './src/assets/images/white-sun.png',
};

export type PageTemplateProps = {
  children: ReactNode;
};

export function PageTemplate({ children }: PageTemplateProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <>
      <Box pb={120}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Group w="7rem">
              <ActionIcon
                onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
                variant="transparent"
                size="2.5em"
              >
                <Avatar src={colorSchemeIconSources?.[colorScheme]} size="2em" />
              </ActionIcon>
            </Group>
            <Group h="100%" gap={0} visibleFrom="sm">
              {routes.map((route) => (
                <a href={route.path} className={classes.link}>
                  {route.id}
                </a>
              ))}
            </Group>

            <Group visibleFrom="sm" w="7rem" justify="flex-end">
              <Button>Sign up</Button>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            {routes.map((route) => (
              <a href={route.path} className={classes.link}>
                {route.id}
              </a>
            ))}

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
      {children}
    </>
  );
}
