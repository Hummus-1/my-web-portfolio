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
  Flex,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';
import classes from './PageTemplate.module.css';
import { routes } from '@/Router';
import { PrimaryColors } from '@/theme';
import { PrimaryColorContext } from '@/PrimaryColorContext';
import { ContactModal } from '../ContactModal/ContactModal';

const colorSchemeIconSources: { [key in 'light' | 'dark' | 'auto']?: any } = {
  light: './src/public/images/black-moon.png',
  dark: './src/public/images/white-sun.png',
};

const mouseDownIconSources: { [key in 'light' | 'dark' | 'auto']?: any } = {
  light: './src/public/images/mouse-cursor-black.png',
  dark: './src/public/images/mouse-cursor-white.png',
};

export type PageTemplateProps = {
  children?: ReactNode;
  titleSection: ReactNode;
  heightLimit: number;
  imageRoute: string;
  imageMaximumWidth?: string;
  blackMode?: boolean;
  primaryColor?: PrimaryColors;
};

export function PageTemplate({
  children,
  titleSection,
  heightLimit,
  imageRoute,
  imageMaximumWidth,
  blackMode,
  primaryColor = 'highViolet',
}: PageTemplateProps) {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  const [previouslyDark, setPreviouslyDark] = useState(false);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);

  const setPrimaryColor = useContext(PrimaryColorContext);

  useEffect(() => {
    if (setPrimaryColor) setPrimaryColor(primaryColor);
    if (blackMode) {
      if (colorScheme === 'dark') setPreviouslyDark(true);
      setColorScheme('dark');
    }
    window.addEventListener('resize', () => setPageHeight(window.innerHeight));

    return () => {
      window.removeEventListener('resize', () => setPageHeight(window.innerHeight));
    };
  }, []);

  const imageBottom = useMemo(
    () => (heightLimit && pageHeight <= heightLimit ? `${pageHeight - heightLimit}px` : '0px'),
    [pageHeight]
  );

  const pageContentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        style={{
          height: '100dvh',
          background: blackMode && colorScheme === 'dark' ? 'black' : '',
          zIndex: -5,
        }}
        className={children ? '' : 'noContent'}
      >
        <Box pb={120}>
          <header className={classes.header}>
            <Group justify="space-between" h="100%">
              <Group w="7rem">
                <ActionIcon
                  onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
                  variant="transparent"
                  size="2.5em"
                  disabled={blackMode}
                  bg="transparent"
                  style={{ zIndex: 2 }}
                >
                  <Avatar src={colorSchemeIconSources?.[colorScheme]} size="2em" />
                </ActionIcon>
              </Group>
              <Group h="100%" gap={0} visibleFrom="sm">
                {routes.map((route) => (
                  <a
                    href={route.path}
                    className={classes.link}
                    onClick={() => blackMode && !previouslyDark && setColorScheme('light')}
                  >
                    {route.id}
                  </a>
                ))}
              </Group>

              <Group visibleFrom="sm" w="7rem" justify="flex-end" style={{ zIndex: 2 }}>
                <Button variant="subtle" onClick={openModal}>
                  Contact
                </Button>
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
                <Button>Contact</Button>
              </Group>
            </ScrollArea>
          </Drawer>
        </Box>
        <ContactModal opened={modalOpened} onClose={closeModal} />
        <Flex direction="column" className={classes.div} style={{ zIndex: 2 }}>
          {titleSection}
          {children && (
            <div className={classes.glitchWrapper}>
              <ActionIcon
                mt="10dvh"
                className={classes.glitch}
                variant="transparent"
                size="2.5em"
                onClick={() => pageContentRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Avatar src={mouseDownIconSources?.[colorScheme]} size="2em" />
              </ActionIcon>
            </div>
          )}
        </Flex>
        <Image
          src={imageRoute}
          maw={imageMaximumWidth}
          w="100dvw"
          style={{
            position: 'absolute',
            right: '0px',
            bottom: imageBottom,
            zIndex: 0,
            mixBlendMode: blackMode && colorScheme === 'dark' ? undefined : 'multiply',
            // filter: 'brightness(150%)',
          }}
        />
      </div>
      {children && (
        <Flex
          h="100dvh"
          ref={pageContentRef}
          bg={blackMode ? 'black' : 'var(--mantine-color-body)'}
          style={{ zIndex: 3, position: 'relative' }}
        >
          {children}
        </Flex>
      )}
    </>
  );
}
