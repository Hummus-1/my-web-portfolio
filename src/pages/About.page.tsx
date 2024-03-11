import { Anchor, Button, Flex, Text } from '@mantine/core';
import { PageTemplate } from '@/components/PageTemplate/PageTemplate';
import classes from '../components/PageTemplate/PageTemplate.module.css';

export function AboutPage() {
  return (
    <PageTemplate
      effectiveImageHeighPercentage={0.7}
      darkModeImageBrightness={125}
      primaryColor="highViolet"
      imageRoute="/static/images/tree-birds.jpg"
      titleSection={
        <div data-glitch="About" className={classes['glitched-title']}>
          About
        </div>
      }
    >
      <Flex align="center" justify="center" direction="column" w="100%" h="100%" gap="sm">
        <Text>Page in progress, you can download my CV meanwhile:</Text>
        <Button variant="subtle">
          <Anchor
            href="/static/docs/Daniel Garcia Hernandez - CV.pdf"
            download="Daniel Garcia Hernandez - CV.pdf"
            underline="never"
            size="sm"
            fw="bold"
          >
            Download CV
          </Anchor>
        </Button>
      </Flex>
    </PageTemplate>
  );
}
