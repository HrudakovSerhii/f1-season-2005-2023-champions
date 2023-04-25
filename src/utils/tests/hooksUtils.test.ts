import { filterWinnersBySeasonRange } from '../hooksUtils'
import { StandingItem } from '../../types'

const testData: StandingItem[] = [
    { season: '2004', round: '1', DriverStandings: [] },
    { season: '2005', round: '2', DriverStandings: [] },
    { season: '2005', round: '3', DriverStandings: [] },
    { season: '2006', round: '4', DriverStandings: [] },
    { season: '2006', round: '5', DriverStandings: [] },
    { season: '2024', round: '6', DriverStandings: [] },
]

describe('App utils', () => {
    describe('filterWinnersBySeasonRange', () => {
        it('returns all items within the default season range', () => {
            const result = filterWinnersBySeasonRange(testData)
            const expectedSubset = [
                { round: '2' },
                { round: '3' },
                { round: '4' },
                { round: '5' }
            ]

            expect(result).toEqual(expect.arrayContaining(expectedSubset))
        })

        it('returns only items within the specified season range', () => {
            const result = filterWinnersBySeasonRange(testData, [2004, 2005])
            const expectedSubset = [
                { round: '1' },
                { round: '2' },
                { round: '3' },
            ]

            expect(result).toEqual(expectedSubset)
        })

        it('returns an empty array when no items are within the season range', () => {
            const result = filterWinnersBySeasonRange(testData, [1990, 1999])

            expect(result).toEqual([])
        })
    })
})
