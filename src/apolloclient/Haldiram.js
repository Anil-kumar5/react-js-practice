import React from 'react'
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql} from '@apollo/client';
const GET_DATA = gql `
query{
  AllProducts{
    attribute_set_id
    created_at
    entity_id
    has_options
    required_options
    sku
    type_id
    updated_at
  }
}
`
function Haldiram() {
  
    const {data,loading,error} = useQuery(GET_DATA)
    if(error){
        console.log(error)
    }
    if(data){
        console.log(data)
    }
    return (
        <div>
    
        </div>
    )
}

export default Haldiram
