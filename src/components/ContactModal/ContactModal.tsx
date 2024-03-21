import { Anchor, Grid, Modal } from '@mantine/core';

type ContactModalProps = {
  opened: boolean;
  onClose: () => void;
};

export const ContactModal = ({ opened, onClose }: ContactModalProps) => (
  <Modal opened={opened} onClose={onClose} title="Contact" centered size="lg" zIndex={1000001}>
    <Grid style={{ zIndex: '10000000000' }}>
      <Grid.Col span={3}>Mail</Grid.Col>
      <Grid.Col span={9}>
        <Anchor href="mailto:dani@danigh.dev">dani@danigh.dev</Anchor>
      </Grid.Col>
      <Grid.Col span={3}>LinkedIn</Grid.Col>
      <Grid.Col span={9}>
        <Anchor href="https://www.linkedin.com/in/daniel-garc%C3%ADa-hern%C3%A1ndez-866a99264/">
          Daniel García Hernández
        </Anchor>
      </Grid.Col>
      <Grid.Col span={3}>Behance</Grid.Col>
      <Grid.Col span={9}>
        <Anchor href="https://www.behance.net/danielgarciaher2">@danielgarciaher2</Anchor>
      </Grid.Col>
      <Grid.Col span={3}>Github</Grid.Col>
      <Grid.Col span={9}>
        <Anchor href="https://github.com/Hummus-1">Hummus-1</Anchor>
      </Grid.Col>
      <Grid.Col span={3}>Location</Grid.Col>
      <Grid.Col span={9}>Santa Cruz de Tenerife, Canary Islands, Spain</Grid.Col>
    </Grid>
  </Modal>
);
