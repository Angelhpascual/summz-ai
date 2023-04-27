import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/octet-stream")
      headers.set("X-RapidAPI-Key", "260506dd8bmshe3baa54f33742a8p10a8eajsnc5a3e97ce351");
      headers.set("X-RapidAPI-Host", "article-extractor-and-summarizer.p.rapidapi.com")

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    })
  })
})

export const { useLazyGetSummaryQuery } = articleApi; 