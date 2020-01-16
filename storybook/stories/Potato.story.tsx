import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Potato } from '@components/Potato';
import { Container } from '@sdk/components';
import { DEFAULT_SPACING } from '@constants';

const navigationMock = {
  navigate() {
    console.log('rodou');
    return true;
  },
};

storiesOf('Potato', module)
  .add('Default', () => (
    <Container mt={DEFAULT_SPACING}>
      {/*
        TODO: create a decent mock to navigation
        //@ts-ignore */}
      <Potato navigation={navigationMock} />
    </Container>
  ));
