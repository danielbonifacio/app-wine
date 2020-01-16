import React from 'react';
import {StyledView, Text} from '@sdk/components';
import {shadow} from '@sdk/utils';
import {White} from '@sdk/colors';

export const Wrapper: React.FC = ({children}) => (
  <StyledView
    bgColor="#f29"
    p={20}
    borderRadius={5}
    {...shadow(1)}
  >
    {children}
  </StyledView>
);

export const InnerText: React.FC = ({children}) => (
  <Text color={White}>{children}</Text>
);
