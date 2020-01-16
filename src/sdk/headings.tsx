import React from 'react';
import Text from './components/Text';

export const Heading1: React.FC = ({children}) => (
  <Text size={32}>
    {children}
  </Text>
);

export const Heading2: React.FC = ({children}) => (
  <Text size={28}>
    {children}
  </Text>
);

export const Heading3: React.FC = ({children}) => (
  <Text size={24}>
    {children}
  </Text>
);

export const Heading4: React.FC = ({children}) => (
  <Text size={16}>
    {children}
  </Text>
);
