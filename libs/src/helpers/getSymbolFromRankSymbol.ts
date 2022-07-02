import { RankSymbol } from '../../types/RankSymbol.type'
import { Symbol } from '../../types/Symbol.type'

export const getSymbolFromRankSymbol = (rankSymbol: RankSymbol): Symbol => {
  return rankSymbol.charAt(1) as Symbol
}
