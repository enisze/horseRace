import React, { FunctionComponent, PropsWithChildren } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export type HorseRaceIconButtonProps = PropsWithChildren<TouchableOpacityProps>

export const HorseRaceIconButton: FunctionComponent<
  HorseRaceIconButtonProps
> = ({ children, ...props }) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>
}
