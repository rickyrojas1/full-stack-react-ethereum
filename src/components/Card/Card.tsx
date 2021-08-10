/* eslint-disable no-shadow */
import React from 'react';
import { colorCombos } from '../../styles/theme.styles';
import { CardApply, CardContainer, CardLink, LoadingSpinner } from './card.styles';

export enum ButtonPosition {
  'left' = 'left',
  'center' = 'center',
  'right' = 'right',
}

const Card = ({
  index,
  children,
  text,
  buttonText,
  buttonPosition = ButtonPosition.right,
  onApply = () => null,
  isLoading = false,
}: {
  index: number;
  children?: React.ReactNode;
  text?: string;
  buttonText?: string;
  buttonPosition?: ButtonPosition;
  onApply?: () => unknown;
  isLoading?: boolean;
}) => {
  const colors = colorCombos[index % 5].toString();
  return (
    <CardContainer colors={colors}>
      {isLoading && <LoadingSpinner type="Oval" color="black" height={25} />}
      {children || <h2 className="card__title">{text}</h2>}
      <CardApply onClick={onApply} buttonPosition={buttonPosition}>
        {buttonText && <CardLink>{buttonText}</CardLink>}
      </CardApply>
    </CardContainer>
  );
};

export default Card;
