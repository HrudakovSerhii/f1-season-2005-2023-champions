import { useEffect, useState } from 'react'

import { useSeasonsWinnersListLocal } from './useLocalState'

import { selectWinnerBySeason } from '../utils/hooksUtils'

import { SEASONS_RANGE } from '../constants'

import { StandingItem } from '../types'

type UseSeasonWinner = {
    data: StandingItem | undefined
}

/**
 * Hook access local state data and search winner of specific season in SeasonsWinners list.
 * If SeasonsWinners local state data is not available or empty, UseSeasonWinner.data is undefined.
 * @param seasonId - season value
 * @return {UseSeasonWinner}
 */
const useSeasonWinner: (seasonId: string) => UseSeasonWinner = (
    seasonId: string
) => {
    const winnersListItems = useSeasonsWinnersListLocal((state) => state.items)
    const [seasonWinnerData, setSeasonWinnerData] = useState<
        StandingItem | undefined
    >()

    useEffect(() => {
        const season = Number(seasonId)

        if (season && winnersListItems?.length) {
            const prevSeason = season - 1

            if (
                prevSeason >= SEASONS_RANGE[0] &&
                prevSeason < SEASONS_RANGE[1]
            ) {
                const winnerItem = selectWinnerBySeason(
                    winnersListItems,
                    prevSeason.toString()
                )

                setSeasonWinnerData(winnerItem)
            }
        }
    }, [winnersListItems, seasonId])

    return {
        data: seasonWinnerData,
    }
}

export default useSeasonWinner
