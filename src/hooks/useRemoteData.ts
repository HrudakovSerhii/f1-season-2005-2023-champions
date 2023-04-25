import { useRef, useState } from 'react'
import DataFetcher from '../utils/dataFetcher/DataFetcher'

type FetchRemoteData = (
    fetchUrl: string,
    fetchQueryParams?: string
) => Promise<void>

interface RemoteData<T> {
    data: T | null
    loading: boolean
    error: Error | null
    fetchRemoteData: FetchRemoteData
}

type Options = Omit<RequestInit, 'method'>

function useRemoteData<T>(
    baseUrl: string,
    fetchOptions?: Options
): RemoteData<T> {
    const dataFetcher = useRef(new DataFetcher(baseUrl, fetchOptions))

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const fetchRemoteData: FetchRemoteData = async (
        fetchUrl: string,
        fetchQueryParams?: string
    ) => {
        setLoading(true)

        const result = await dataFetcher.current.fetch(
            fetchUrl,
            fetchQueryParams
        )

        if (typeof result === typeof Error) {
            setError(result)
        } else {
            setData(result)
        }

        setLoading(false)
    }

    return {
        data,
        loading,
        error,
        fetchRemoteData,
    }
}

export default useRemoteData
