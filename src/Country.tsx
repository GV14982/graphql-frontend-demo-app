import { useState } from 'react'
import { useQuery } from "urql"
import { GetCountryByCodeQuery, GetCountryByCodeQueryVariables } from "./generated/graphql"
import { graphql } from "./generated"

const getCountryByCode = graphql(`
  query GetCountryByCode($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      continent {
        code
        name
      }
    }
  }
`)

export const Country = () => {
  const [code, setCode] = useState("")
  const [{ data, error, fetching: loading }, query] = useQuery<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>({
    query: getCountryByCode,
    variables: {
      code
    },
    pause: true,
  })

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        query();
      }}>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        <button type='submit'>Get Country</button>
      </form>
      <pre>{data?.country ? JSON.stringify(data.country, null, 2) : "No Country :("}</pre>
      {error && <p>{error.toString()}</p>}
    </>
  )
}
