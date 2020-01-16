import React from 'react';
import { StyledView, SafeArea, Touchable } from '@sdk/components';
import { shadow } from '@sdk/utils';
import { Image, ImageSourcePropType, GestureResponderEvent } from 'react-native';

export const Wrapper: React.FC = ({ children }) => (
  <StyledView
    {...shadow(5)}
    bgColor="#fff"
    zIndex={1}
  >
    {children}
  </StyledView>
);

export const Inner: React.FC = ({ children }) => (
  <SafeArea avoidTop>
    <StyledView
      height={50}
      px={20}
      items={'center'}
      flexDirection={'row'}
    >
      {children}
    </StyledView>
  </SafeArea>
);


export const Icon: React.FC<{
  source: ImageSourcePropType
  onPress?: (event: GestureResponderEvent) => void
}> = ({ source, onPress }) => (
  <Touchable onPress={onPress}>
    <StyledView mr={20}>
      <Image source={source} />
    </StyledView>
  </Touchable>
);
