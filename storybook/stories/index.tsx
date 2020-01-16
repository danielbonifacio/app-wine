import React from 'react';

import './Potato.story';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Banner from '@components/Banner';
import HomeScreenBannerCarousel from '@components/BannerCarousel';
import { Container } from '@sdk/components';
import { DEFAULT_SPACING } from '@constants';

storiesOf('Banner', module)
  .add('Default', () => (
    <Container>
      <Banner onPress={action('Potato')}/>
    </Container>
  ))
  .add('with carousel', () => (
    <Container
      mt={DEFAULT_SPACING}
      fluid
    >
      <HomeScreenBannerCarousel />
    </Container>
  ));
