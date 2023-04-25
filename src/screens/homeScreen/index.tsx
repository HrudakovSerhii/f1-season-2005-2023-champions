import React from 'react'

import Spinner from '../../components/Spinner'

import useSeasonsWinners from '../../hooks/useSeasonsWinners'

import { SEASONS_RANGE } from '../../constants'

const HomeScreen = () => {
    const { data, loading } = useSeasonsWinners()

    const pageTitle = `${SEASONS_RANGE[0]}-${SEASONS_RANGE[1]} Seasons Winners`

    return (
        <div className="seasons-winners flex flex-col w-[100%]">
            {!loading && pageTitle}
            {loading && <Spinner title={`Loading ${pageTitle}`} />}
            {!loading && data?.length && (
                <>
                    <div className="seasons-winners-list flex overflow-scroll pb-6">
                        <ul className="flex">
                            {data.map((race) => JSON.stringify(race))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}

export default HomeScreen
