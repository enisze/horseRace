import { FunctionComponent, PropsWithChildren } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export type HorseRaceButtonProps = PropsWithChildren<TouchableOpacityProps>

export const HorseRaceButton: FunctionComponent<HorseRaceButtonProps> = ({
  children,
  ...props
}) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>
}
