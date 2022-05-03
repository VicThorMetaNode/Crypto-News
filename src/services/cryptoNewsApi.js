import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '49848b005amshe8bca68c28066e4p15202fjsn8daf06491b00'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders});

export const cryptoNewsApi = createApi ({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
    getCryptoNews: builder.query({
        query:({ newsCategory, count })=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;