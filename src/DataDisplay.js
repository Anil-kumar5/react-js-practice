import React from 'react'
import {useQuery,gql} from '@apollo/client';
const GET_USERS = gql`
query getUsersData {
    users {
      id
      name
      userName
      age
      nationality
      friends {
        age
        name
      }
    }
  }
`
function DataDisplay() {
    const {data} = useQuery(GET_USERS);
    if(data){
        console.log(data.users,'data')
    }
    return (
        <div>
                <table>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>userName</th>
                                    <th>age</th>
                                </tr>
                         <tr>
               
            {
                data&& data.users.map(de => {
                    return(
                        <tr>
                    <td>
                                    {de.id}
                                    {de.name}
                                    {de.userName}
                                    {de.age}
                                    </td>
                                    </tr>
                    )
                })
            }
                                </tr>

             </table>
        </div>
    )
}

export default DataDisplay
