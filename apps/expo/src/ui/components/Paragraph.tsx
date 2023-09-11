import { FunctionComponent, PropsWithChildren } from 'react'
import { Text, TextProps } from 'react-native'

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
      className={`
        ${size === 'S' && 'text-base'}
        ${size === 'M' && 'text-lg'}
        ${size === 'L' && 'text-2xl'}
        ${props.className}`}
    >
      {children}
    </Text>
  )
}
