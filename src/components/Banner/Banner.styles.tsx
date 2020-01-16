import React from 'react';
import { StyledView, Touchable } from '@sdk/components';
import { White } from '@sdk/colors';
import { shadow } from '@sdk/utils';
import styled from 'styled-components/native';
import { TouchableProps } from 'react-native-svg';

export const Wrapper: React.FC<TouchableProps> = ({ children, onPress }) => (
  <StyledView {...shadow(5)}>
    <StyledView
      borderRadius={5}
      bgColor={White}
      style={{
        aspectRatio: 1464 / 1536,
      }}
      overflow={'hidden'}
      position={'relative'}
    >
      <Touchable onPress={onPress}>
        {children}
      </Touchable>
    </StyledView>
  </StyledView>
);

export const InnerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
