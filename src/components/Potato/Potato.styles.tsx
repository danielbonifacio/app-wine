import React from 'react';
import { StyledView, Text } from '@sdk/components';
import { Pink, White } from '@sdk/colors';
import { shadow } from '@sdk/utils';

export const Wrapper: React.FC = ({ children }) => (
  <StyledView {...shadow(1)}>
    <StyledView
      p={20}
      bgColor={White}
      borderRadius={5}
      position={'relative'}
      overflow={'hidden'}
    >
      {children}
    </StyledView>
  </StyledView>
);

export const InnerText: React.FC = ({ children }) => (
  <Text
    size={14}
    color={Pink}
  >
    {children}
  </Text>
);
