import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const articalApi=createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders:(headers)=>{
            headers.set( 'X-RapidAPI-Key','a1b4aeb82amsh85de83d2d0a2c24p158fdejsn1464e0d78fa4')
            headers.set( 'X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com')
            return headers
            
        }


    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});
export const {useLazyGetSummaryQuery}=articalApi