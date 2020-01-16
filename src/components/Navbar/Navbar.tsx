import React from 'react';
import {Text} from 'react-native';
import * as NB from './Navbar.styles';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { arrowLeft } from '@icons';
import { WineLogo } from '@images';
import NavbarWineBox from '@components/NavbarWineBox';

declare interface NavbarProps extends NavigationInjectedProps {
  showLogo?: boolean
  showReturnButton?: boolean
  title?: string
  showWinebox?: boolean
}

const Header: React.FC<NavbarProps> = ({
  navigation,
  showLogo = false,
  showReturnButton = true,
  title,
  showWinebox,
}) => (
  <NB.Wrapper>
    <NB.Inner>
      { showLogo &&
        <WineLogo width="60" />
      }
      {
        showReturnButton &&
        <NB.Icon
          onPress={() => navigation.goBack()}
          source={arrowLeft}
        />
      }
      {
        title &&
        <Text>{title}</Text>
      }
      {
        showWinebox &&
        <NavbarWineBox />
      }
    </NB.Inner>
  </NB.Wrapper>
);

export default withNavigation(Header);
