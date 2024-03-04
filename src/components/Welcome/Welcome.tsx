import { Text, Flex, Group, Image, useMantineColorScheme } from '@mantine/core';
import classes from './Welcome.module.css';
import { useEffect, useState, useMemo } from 'react';

const skills = ['React', 'Typescript', 'Javascript', 'Python', 'C++', 'Vue'];
const HEIGHT_LIMIT = 1100;

export function Welcome() {
  const { colorScheme } = useMantineColorScheme();

  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener('resize', () => setPageHeight(window.innerHeight));

    return () => {
      window.removeEventListener('resize', () => setPageHeight(window.innerHeight));
    };
  }, []);

  const imageBottom = useMemo(
    () => (pageHeight >= HEIGHT_LIMIT ? '0px' : `${pageHeight - HEIGHT_LIMIT}px`),
    [pageHeight]
  );

  return (
    <>
      <Flex direction="column" className={classes.div} style={{ zIndex: 1 }}>
        <Flex gap="3rem">
          <div title="Daniel " className={classes['glitched-title']}>
            Daniel
          </div>
          <div title="García" className={classes['glitched-title']}>
            García
          </div>
          <div title="Hernández" className={classes['glitched-title']}>
            Hernández
          </div>
        </Flex>
        <Text style={{ zIndex: 1 }} size="md" fw="400">
          Software Engineer
        </Text>
        <Group gap="xs">
          {skills.map((skill, index) => (
            <>
              <Text style={{ zIndex: 1 }} size="sm" td="underline">
                {skill}
              </Text>
              <Text style={{ zIndex: 1 }} size="sm">
                {index < skills.length - 1 && '+'}
              </Text>
            </>
          ))}
        </Group>
      </Flex>
      <Image
        src="./src/assets/images/corv.jpeg"
        // maw="1500px"
        w="100dvw"
        style={{
          position: 'absolute',
          right: '0px',
          bottom: imageBottom,
          zIndex: -1,
          mixBlendMode: 'multiply',
          // filter: 'brightness(150%)',
        }}
      />
    </>
  );
}
