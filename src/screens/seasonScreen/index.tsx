import React from 'react'
import { useOutletContext } from 'react-router'

import useSeasonWinners from '../../hooks/useSeasonWinners'

import Spinner from '../../components/Spinner'
import ScreenTitle from '../../components/ScreenTitle'

const SeasonScreen: React.FC = () => {
    const { seasonId } = useOutletContext<{ seasonId: string }>()
    const { data, loading } = useSeasonWinners(seasonId)

    return (
        <div className="season-races-winners max-w-screen-xl mx-auto">
            <ScreenTitle title={`Season ${seasonId}`} />
            {loading && <Spinner title={`Loading season ${seasonId} table`} />}
            {!loading && data?.length && JSON.stringify(data)}
        </div>
    )
}

export default SeasonScreen
