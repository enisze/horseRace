import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Button, ButtonProps } from 'react-native-elements'

export type HorseRaceButtonProps = PropsWithChildren<ButtonProps>

export const HorseRaceButton: FunctionComponent<HorseRaceButtonProps> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>
}
