import React from 'react'

function SearchAr() {
    const [search , setSearch ] = React.useState('');
    const str = 'anil kumar anil';
    let ar = str.split(' ');
    ar.forEach(data => {
        if(data.match(search)){
            let a = data.match(search).index;
            let b = data.match(search).index + search.length-1;
            for(let i = 0; i<data.length;i++){
                        if(i>=a&&i<=b){
                            console.log(data.charAt(i),'matched')
                        }else{
                            console.log(data.charAt(i)) 
                        }
                   }
        }
        else {
            
        }
        //    if(data.match(search)){ 
        //    for(let i = 0; i<data.length;i++){
        //         if(i>=a&&i<=b){
        //             console.log(data.charAt(i),'matched')
        //         }else{
        //             console.log(data.charAt(i)) 
        //         }
        //    }
        // }  else {
        //     return null
        // }  
    }
    )
    return (
        <div>
            <input type = "text" value = {search} onChange = {e => setSearch(e.target.value)}/>
        </div>
    )
}

export default SearchAr
