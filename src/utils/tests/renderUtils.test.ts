import { getSeasonsWinnersGroupedData } from '../renderUtils'

import { StandingItem } from '../../types'

const testData: StandingItem[] = [
    { season: '2004', round: '1', DriverStandings: [] },
    { season: '2005', round: '2', DriverStandings: [] },
    { season: '2005', round: '3', DriverStandings: [] },
    { season: '2006', round: '4', DriverStandings: [] },
    { season: '2006', round: '5', DriverStandings: [] },
    { season: '2024', round: '6', DriverStandings: [] },
]

describe('getSeasonsWinnersGroupedData', () => {
    it('should return correct number of groups', () => {
        const groupSize = 2

        expect(
            getSeasonsWinnersGroupedData(testData, groupSize)?.length
        ).toEqual(testData.length / groupSize)
    })

    it('should return empty list if no data provided', () => {
        const groupSize = 2

        expect(getSeasonsWinnersGroupedData([], groupSize)).toEqual([])
    })

    it('should return array with single group if groupSize is bigger than provided data size', () => {
        const groupSize = 120

        expect(getSeasonsWinnersGroupedData(testData, groupSize)).toEqual([
            testData,
        ])
    })
})
