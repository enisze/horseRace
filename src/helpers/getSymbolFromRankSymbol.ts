import type { RankSymbol } from '../types/RankSymbol.type'
import type { CardSymbol } from '../types/Symbol.type'

export const getSymbolFromRankSymbol = (
	rankSymbol: RankSymbol | undefined,
): CardSymbol => {
	if (!rankSymbol) return 'C'
	return rankSymbol.charAt(1) as CardSymbol
}
