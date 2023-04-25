import { useEffect, useState } from 'react'

import useRemoteData, { RemoteData } from './useRemoteData'

import { filterWinnersBySeasonRange } from '../utils/hooksUtils'

import {
    ALL_SEASON_WINNERS_PATH,
    ROOT_ERGAST_API_PATH,
} from '../constants/ergastApiConstans'

import { AllSeasonsData, StandingItem } from '../types'

type UseSeasonsWinners = Omit<
    RemoteData<StandingItem[] | undefined>,
    'fetchRemoteData'
>

/**
 * Hook to request list of winners for every season of F1 championship. Using useRemoteData default state props.
 * @return UseSeasonsWinners
 */
const useSeasonsWinners: () => UseSeasonsWinners = () => {
    const [winnersList, setWinnersList] = useState<StandingItem[]>()

    const { data, loading, error, fetchRemoteData } =
        useRemoteData<AllSeasonsData>(ROOT_ERGAST_API_PATH)

    useEffect(() => {
        if (!loading) {
            fetchRemoteData(
                ALL_SEASON_WINNERS_PATH,
                new URLSearchParams({
                    limit: '1000',
                }).toString()
            )
        }
    }, [loading, fetchRemoteData])

    useEffect(() => {
        if (data?.MRData.StandingsTable.StandingsLists) {
            const updatedWinnersList = filterWinnersBySeasonRange(
                data?.MRData.StandingsTable.StandingsLists
            )

            setWinnersList(updatedWinnersList)
        }
    }, [data])

    return {
        loading,
        error,
        data: winnersList,
    }
}

export default useSeasonsWinners
