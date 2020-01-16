import {css} from 'styled-components/native';
import {getCssValue} from '@sdk/utils';

export interface MarginMixin {
  m: number | string;
  ml: number | string;
  mr: number | string;
  mt: number | string;
  mb: number | string;
  mx: number | string;
  my: number | string;
}

export const marginMixin = css<Partial<MarginMixin>>`
  ${({m}) => m && `margin: ${getCssValue(m)}px`};
  ${({ml}) => ml && `margin-left: ${getCssValue(ml)}`};
  ${({mr}) => mr && `margin-right: ${getCssValue(mr)}`};
  ${({mt}) => mt && `margin-top: ${getCssValue(mt)}`};
  ${({mb}) => mb && `margin-bottom: ${getCssValue(mb)}`};

  ${({mx}) =>
    mx &&
    `margin-left: ${getCssValue(mx)};
     margin-right:${getCssValue(mx)};
`};
  ${({my}) =>
    my &&
    `margin-bottom: ${getCssValue(my)};
     margin-top: ${getCssValue(my)};
`};
`;
