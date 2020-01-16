import React from 'react';
import StyledView from './StyledView';

declare interface ItemsWithSeparatorProps {
  children: any
  gap?: number
}

const ItemsWithSeparator = ({children, gap, ...props}: ItemsWithSeparatorProps): JSX.Element => {
  const finalFields = children.map((child: any, index: number) => {
    return [
      child,
      index !== children.length - 1 && (
        <StyledView key={index}
          {...props}
          height={gap || 0}
        />
      ),
    ];
  });

  return (
    <StyledView {...props}>
      {finalFields}
    </StyledView>
  );
};

export default ItemsWithSeparator;
