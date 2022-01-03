import React from 'react'
import AnotherChild from './AnotherChild';

function Child({data}) {
    console.log(data,'data');
    return (
        <>
            <AnotherChild data = {data} />
        </>
    )
}

export default Child
