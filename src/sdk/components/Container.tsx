import React from 'react';
import StyledView, { StyledViewProps } from './StyledView';
import ItemsWithSeparator from './ItemsWithSeparator';
import { DEFAULT_SPACING } from '@constants';

declare interface ContainerProps extends StyledViewProps {
  fluid?: boolean
  gap?: number
}

const Container: React.FC<ContainerProps> = ({ children, fluid, gap, ...rest }) => {
  return (
    <StyledView
      {...rest}
      mx={fluid ? 0 : DEFAULT_SPACING}
    >
      {
        // o children, apesar de ser um array, nao recebe o length
        // @ts-ignore
        children.length > 1 &&
        // @ts-check
        <ItemsWithSeparator gap={gap}>
          {children}
        </ItemsWithSeparator> ||
        children
      }
    </StyledView>
  );

};
export default Container;
