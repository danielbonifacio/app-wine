import React from 'react';
import { Image } from 'react-native';
import { NavbarWineBox as INavbarWineBox } from '@images';
import * as NWB from './NavbarWinebox.styles';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

const NavbarWineBox: React.FC<NavigationInjectedProps> = ({ navigation }) => (
  <NWB.Wrapper onPress={() => navigation.navigate('Headings')}>
    <Image source={INavbarWineBox} />
  </NWB.Wrapper>
);

export default withNavigation(NavbarWineBox);
