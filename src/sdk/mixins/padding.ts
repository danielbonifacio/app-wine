import {css} from 'styled-components/native';
import {getCssValue} from '@sdk/utils';

export interface PaddingMixin {
  p: number | string;
  pl: number | string;
  pr: number | string;
  pt: number | string;
  pb: number | string;
  px: number | string;
  py: number | string;
}

export const paddingMixin = css<Partial<PaddingMixin>>`
  ${({p}) => p && `padding: ${getCssValue(p)}px`};
  ${({pl}) => pl && `padding-left: ${getCssValue(pl)}`};
  ${({pr}) => pr && `padding-right: ${getCssValue(pr)}`};
  ${({pt}) => pt && `padding-top: ${getCssValue(pt)}`};
  ${({pb}) => pb && `padding-bottom: ${getCssValue(pb)}`};

  ${({px}) =>
    px &&
    `padding-left: ${getCssValue(px)};
     padding-right:${getCssValue(px)};
`};

  ${({py}) =>
    py &&
    `padding-bottom: ${getCssValue(py)};
     padding-top: ${getCssValue(py)};
`};
`;
