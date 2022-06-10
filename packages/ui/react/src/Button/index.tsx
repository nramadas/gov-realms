import React, { forwardRef } from 'react';

import * as buttonStyles from '../utils/styles/common/button';
import { createFactory } from '../utils/styles/elementFactory';

const createButton = createFactory<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>('button');

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const GradientUnpadded = createButton(buttonStyles.GRADIENT_UNPADDED);
export const Gradient = createButton(buttonStyles.GRADIENT);

export const DarkUnpadded = createButton(buttonStyles.DARK_UNPADDED);
export const Dark = createButton(buttonStyles.DARK);

export const PrimaryUnpadded = createButton(buttonStyles.PRIMARY_UNPADDED);
export const Primary = createButton(buttonStyles.PRIMARY);

export const SecondaryUnpadded = createButton(buttonStyles.SECONDARY_UNPADDED);
export const Secondary = createButton(buttonStyles.SECONDARY);

const TertiaryWrapperUnpadded = createButton(buttonStyles.TERTIARY_WRAPPER_UNPADDED);
const TertiaryWrapper = createButton(buttonStyles.TERTIARY_WRAPPER);

export const TertiaryUnpadded = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <TertiaryWrapperUnpadded className={className} {...rest} ref={ref}>
      <div className={buttonStyles.TERTIARY}>{children}</div>
    </TertiaryWrapperUnpadded>
  );
});

export const Tertiary = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <TertiaryWrapper className={className} {...rest} ref={ref}>
      <div className={buttonStyles.TERTIARY}>{children}</div>
    </TertiaryWrapper>
  );
});
