import { StandingItem } from '../types'

export const getSeasonsWinnersGroupedData = (
    data: StandingItem[],
    groupSize: number = 5
) =>
    data?.reduce((groupedItems, standingItem, index) => {
        const groupIndex = Math.floor(index / groupSize)

        if (groupedItems[groupIndex]) {
            groupedItems[groupIndex] = [
                ...groupedItems[groupIndex],
                data[index],
            ]
        } else {
            groupedItems.push([data[index]])
        }

        return groupedItems
    }, [] as StandingItem[][])
