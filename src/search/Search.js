import React from "react";
import data from './Search.json';
const Search = () => {
    const [ searchData , setSearchData ] = React.useState('');
    const [ data,setData ]  = React.useState('');
    // const filteredData = data.jsondata.filter(data => data.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()));
    // console.log(filteredData)
    let str = 'anil kumar anil';
    let da;
    let du;
    let a1 = [];
    if(searchData.length >0){
         da = str.match(searchData).index
         du = str.match(searchData).index + searchData.length-1;
    }
    // console.log(du,'du')
     for(let i =0; i<str.length;i++){
           if( i >= da && i<=du){    
                //    <span>{str.charAt(i)}</span>
                // console.log(str.charAt(i),'matched')
                // a1.push(str.charAt(i))
                // document.getElementById('haha').innerHTML = str.charAt(i)
           } else {
                //    <span>{str.charCodeAt(i)}</span>
                // console.log(str.charAt(i))
                // a1.push(str.charAt(i))
                // document.getElementById('haha').innerHTML = str.charAt(i)
           }
     };
     console.log(a1.join(''))
     document.getElementById('haha').innerHTML = 'welcome';
//    let spl =  str.split(' ');
//    let  a;
//    let b;
//    for(let x of spl){
//     if(searchData.length >0){
//         a = str.match(searchData).index
//         b = str.match(searchData).index + searchData.length-1;   
//    }
//    }
//      for(let i = 0;i<spl.length;i++){
//      }
    return(
        <div>
           <input type = "text" value = {searchData} onChange = {e => setSearchData(e.target.value)}/>
           <div>
           {/* {
               filteredData.map(data => {
                   let ind;
                if(data.name.match(searchData)){
                   ind= data.name.indexOf(searchData)
                }
                console.log(data.name.length);
                for(let i =0; i<data.name.length;i++){
                    if(i===ind){
                        // console.log(data.name.charAt(i))
                      return  <span>{data.name.charAt(i)}</span>
                    }else {
                        // console.log(data.name.charAt(i))
                        return  <span>{data.name.charAt(i)}</span>
                    }
                }
           })
        } */}
        <span id='haha'></span>
        </div>
        </div>
    )
}
export default Search