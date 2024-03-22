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
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';
import classes from './PageTemplate.module.css';
import { routes } from '@/Router';
import { PrimaryColors } from '@/theme';
import { PrimaryColorContext } from '@/PrimaryColorContext';
import { ContactModal } from '../ContactModal/ContactModal';

const colorSchemeIconSources: { [key in 'light' | 'dark' | 'auto']?: any } = {
  light: '/static/images/black-moon.png',
  dark: '/static/images/white-sun.png',
};

const mouseDownIconSources: { [key in 'light' | 'dark' | 'auto']?: any } = {
  light: '/static/images/mouse-cursor-black.png',
  dark: '/static/images/mouse-cursor-white.png',
};

export type PageTemplateProps = {
  children?: ReactNode;
  titleSection: ReactNode;
  effectiveImageHeighPercentage: number;
  imageRoute: string;
  imageMaximumWidth?: string;
  blackMode?: boolean;
  primaryColor?: PrimaryColors;
  darkModeImageBrightness?: number;
  useChildrenMinimumHeigh?: boolean;
};

export function PageTemplate({
  children,
  titleSection,
  effectiveImageHeighPercentage,
  imageRoute,
  imageMaximumWidth,
  blackMode,
  primaryColor = 'highViolet',
  darkModeImageBrightness,
  useChildrenMinimumHeigh,
}: PageTemplateProps) {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const [isLoading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
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
    window.addEventListener('resize', () =>
      setPageSize({ height: window.innerHeight, width: window.innerWidth })
    );

    return () => {
      window.removeEventListener('resize', () =>
        setPageSize({ height: window.innerHeight, width: window.innerWidth })
      );
    };
  }, []);

  const imageRef = useRef<HTMLImageElement>(null);
  const [titleToBottomDistance, setTitleToBottomDistance] = useState<number | undefined>();
  const setTitleRef = (ref: HTMLDivElement) => {
    if (ref) setTitleToBottomDistance(ref.getBoundingClientRect().bottom);
  };

  const imageBottom = useMemo(() => {
    if (titleToBottomDistance && imageRef.current) {
      const maxImageEffectiveHeight = pageSize.height - titleToBottomDistance;
      const imageEffectiveHeight = imageRef.current.clientHeight * effectiveImageHeighPercentage;
      return imageEffectiveHeight > maxImageEffectiveHeight
        ? `${maxImageEffectiveHeight - imageEffectiveHeight}px`
        : '0px';
    }
    return '0px';
  }, [pageSize, imageRef.current, titleToBottomDistance, isLoading]);

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
        <Box pb={120} className={classes['header-container']}>
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
                <a
                  href={route.path}
                  className={classes.link}
                  onClick={() => blackMode && !previouslyDark && setColorScheme('light')}
                >
                  {route.id}
                </a>
              ))}

              <Divider my="sm" />

              <Group justify="center" grow pb="xl" px="md">
                <Button onClick={openModal}>Contact</Button>
              </Group>
            </ScrollArea>
          </Drawer>
        </Box>
        <ContactModal opened={modalOpened} onClose={closeModal} />
        <Flex direction="column" align="center" style={{ zIndex: 2 }}>
          {isLoading ? (
            <div className={classes['typing-wrapper']}>
              <Text className={classes['typing-text']} size="sm">
                Loading...
              </Text>
            </div>
          ) : (
            <>
              <Flex direction="column" align="center" ref={setTitleRef} style={{ zIndex: 2 }}>
                {titleSection}
              </Flex>
              {children && (
                <div className={classes.glitchWrapper}>
                  <ActionIcon
                    mt="sm"
                    className={classes.glitch}
                    variant="transparent"
                    size="2.5em"
                    onClick={() => pageContentRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Avatar src={mouseDownIconSources?.[colorScheme]} size="2em" />
                  </ActionIcon>
                </div>
              )}
            </>
          )}
        </Flex>
        <Image
          src={imageRoute}
          maw={imageMaximumWidth}
          ref={imageRef}
          onLoad={() => setLoading(false)}
          w="100dvw"
          style={{
            position: 'absolute',
            right: '0px',
            bottom: imageBottom,
            zIndex: 0,
            mixBlendMode: blackMode && colorScheme === 'dark' ? undefined : 'multiply',
            filter:
              colorScheme === 'dark' && darkModeImageBrightness
                ? `brightness(${darkModeImageBrightness}%)`
                : '',
            visibility: titleToBottomDistance ? 'visible' : 'hidden',
          }}
        />
      </div>
      {children && !isLoading && (
        <Flex
          h={useChildrenMinimumHeigh ? undefined : '100dvh'}
          mih={useChildrenMinimumHeigh ? '100dvh' : undefined}
          ref={pageContentRef}
          bg={blackMode ? 'black' : 'var(--mantine-color-body)'}
          style={{ zIndex: 3, position: 'relative' }}
          p="md"
        >
          {children}
        </Flex>
      )}
    </>
  );
}
