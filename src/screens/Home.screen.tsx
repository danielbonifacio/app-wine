import React from 'react';
import Potato from '@components/Potato';
import HelloWorld from '@components/HelloWorld';
import Navbar from '@components/Navbar';
import { SafeAreaView } from 'react-native';
import { ScrollView, Container } from '@sdk/components';
import BannerCarousel from '@components/BannerCarousel';
import { DEFAULT_SPACING } from '@constants';

const HomeScreen: React.FC = () => (
  <>
    <Navbar
      showLogo
      showReturnButton={false}
      showWinebox
    />
    <SafeAreaView>
      <ScrollView fluid>
        <Container
          mt={DEFAULT_SPACING}
          fluid
        >
          <BannerCarousel />
        </Container>
        <Container
          fluid
          mt={DEFAULT_SPACING}
        >
          <HelloWorld />
        </Container>
        <Container
          mt={DEFAULT_SPACING}
        >
          <Potato />
        </Container>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default HomeScreen;
