import React from 'react';
import * as B from './Potato.styles';
import { Touchable } from '@sdk/components';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

export const Potato: React.FC<NavigationInjectedProps> = ({ navigation }) => (
  <Touchable onPress={() => navigation.navigate('Animations')}>
    <B.Wrapper>
      <B.InnerText>
        {'Potato chips!'}
      </B.InnerText>
    </B.Wrapper>
  </Touchable>
);
export default withNavigation(Potato);
