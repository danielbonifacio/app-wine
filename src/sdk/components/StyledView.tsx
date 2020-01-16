import styled from 'styled-components/native';
import {FlexStyle, FlexAlignType} from 'react-native';

import {getCssValue} from '@sdk/utils';
import {FlexMixin, flexMixin} from '@sdk/mixins/flex';
import {marginMixin, MarginMixin} from '@sdk/mixins/margin';
import {paddingMixin, PaddingMixin} from '@sdk/mixins/padding';
import {positionedMixin, PositionedMixin} from '@sdk/mixins/positioned';

export type StyledViewProps = Partial<
  {
    bgColor: string;

    overflow: 'visible' | 'hidden' | 'scroll';

    height: number | string;
    maxWidth: number | string;
    minHeight: number | string;
    maxHeight: number | string;
    width: number | string;

    self: string;
    items: FlexAlignType;
    justify: FlexStyle['justifyContent'];

    borderRadius: number | string;
    zIndex: number;
    opacity: number;
  } & MarginMixin &
    PaddingMixin &
    PositionedMixin &
    FlexMixin
>;

const StyledView = styled.View<StyledViewProps>`
  ${marginMixin}
  ${paddingMixin}
  ${positionedMixin}
  ${flexMixin}

  ${({bgColor}) => bgColor && `background-color: ${bgColor}`};
  ${({opacity}) => opacity && `opacity: ${opacity}`};

  ${({overflow}) => overflow && `overflow: ${overflow}`};

  ${({width}) => width && `width: ${getCssValue(width)}`};
  ${({maxWidth}) => maxWidth && `max-width: ${getCssValue(maxWidth)}`};
  ${({height}) => height && `height: ${getCssValue(height)}`};
  ${({minHeight}) => minHeight && `min-height: ${getCssValue(minHeight)}`};

  ${({self}) => self && `align-self: ${self}`};
  ${({items}) => items && `align-items: ${items}`};
  ${({justify}) => justify && `justify-content: ${justify}`};

  ${({borderRadius}) =>
    borderRadius && `border-radius: ${getCssValue(borderRadius)}`};
  ${({zIndex}) => zIndex && `z-index: ${getCssValue(zIndex)}`};
`;

export default StyledView;
