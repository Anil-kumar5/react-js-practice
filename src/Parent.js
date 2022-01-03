import React from 'react'
import Child from './Child'

function Parenttt() {
    const data = [
        {
            name: 'anil',
            bf: 'nhfuwe'
        },
        {
            name: 'anil',
            bf: 'nhfuwe'
        },
    ]
    return (
        <div>
             <Child data = {data} />
        </div>
    )
}

export default Parenttt
