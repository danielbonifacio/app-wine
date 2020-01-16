import React from 'react';
import { StyledView, Touchable } from '@sdk/components';
import { DEFAULT_SPACING } from '@constants';
import { shadow } from '@sdk/utils';
import { TouchableProps } from 'react-native-svg';

export const Wrapper: React.FC<TouchableProps> = ({ children, onPress }) => (
  <StyledView
    position={'absolute'}
    right={DEFAULT_SPACING}
    top={5}
    {...shadow(4)}
  >
    <Touchable onPress={onPress}>
      {children}
    </Touchable>
  </StyledView>
);
