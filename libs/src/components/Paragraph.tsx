import { FunctionComponent, PropsWithChildren } from 'react'
import { Text } from 'react-native'
import { tw } from '../tailwind'

type ParagraphSize = 'S' | 'M' | 'L'

export type ParagraphProps = PropsWithChildren<{ size?: ParagraphSize }>

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  size = 'M',
  children,
}) => {
  return (
    <Text
      style={[
        size === 'S' && tw`text-base`,
        size === 'M' && tw`text-lg`,
        size === 'L' && tw`text-2xl`,
      ]}
    >
      {children}
    </Text>
  )
}
