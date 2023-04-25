export const isDevelopment = process.env.NODE_ENV !== 'production'

export const isTest = process.env.NODE_ENV === 'test'

export const SEASONS_RANGE: [number, number] = [2005, 2023]

// App routing
export const HOME = '/'
export const SEASON = 'season/:seasonId'
