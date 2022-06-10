import React, { forwardRef } from 'react';

import * as buttonStyles from '../utils/styles/common/button';
import { createFactory } from '../utils/styles/elementFactory';

const createAnchor = createFactory<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>('a');

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const GradientUnpadded = createAnchor(buttonStyles.GRADIENT_UNPADDED);
export const Gradient = createAnchor(buttonStyles.GRADIENT);

export const DarkUnpadded = createAnchor(buttonStyles.DARK_UNPADDED);
export const Dark = createAnchor(buttonStyles.DARK);

export const PrimaryUnpadded = createAnchor(buttonStyles.PRIMARY_UNPADDED);
export const Primary = createAnchor(buttonStyles.PRIMARY);

export const SecondaryUnpadded = createAnchor(buttonStyles.SECONDARY_UNPADDED);
export const Secondary = createAnchor(buttonStyles.SECONDARY);

const TertiaryWrapperUnpadded = createAnchor(buttonStyles.TERTIARY_WRAPPER_UNPADDED);
const TertiaryWrapper = createAnchor(buttonStyles.TERTIARY_WRAPPER);

export const TertiaryUnpadded = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <TertiaryWrapperUnpadded className={className} {...rest} ref={ref}>
      <div className={buttonStyles.TERTIARY}>{children}</div>
    </TertiaryWrapperUnpadded>
  );
});

export const Tertiary = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <TertiaryWrapper className={className} {...rest} ref={ref}>
      <div className={buttonStyles.TERTIARY}>{children}</div>
    </TertiaryWrapper>
  );
});
