import { FunctionComponent, PropsWithChildren } from 'react'
import { Text, TextProps } from 'react-native-elements'
import { tw } from '../tailwind'

type ParagraphSize = 'S' | 'M' | 'L'

export type ParagraphProps = PropsWithChildren<{
  size?: ParagraphSize
}> &
  TextProps

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  size = 'M',
  children,
  ...props
}) => {
  return (
    <Text
      {...props}
      style={[
        size === 'S' && tw`text-base`,
        size === 'M' && tw`text-lg`,
        size === 'L' && tw`text-2xl`,
        props.style,
      ]}
    >
      {children}
    </Text>
  )
}
