import React,{useEffect} from 'react';
import axios from 'axios';
const OrderDetails = () => {
    const [orderData, setOrderData] = React.useState([])
    const [dayData , setDayData ] = React.useState(null);
    const [weekData , setWeekData ] = React.useState(null);
    const [monthData , setMonthData ] = React.useState(null);
    useEffect(() =>{
      axios.get('https://api.npoint.io/e79a2754ea312b832e10')
      .then(resp =>resp.data)
      .then(data => setOrderData(data) )
    },[])
    // const fun = (i) => {
        // orderData.map(data => {
        //     return(
        //         console.log(new Date(data.orderDate).getDate()),
        //         console.log(new Date().getDate(),'current')
        //     )
        // })
        // orderData.sort((a,b)=> (new Date(a.orderDate).getDate()<new Date(b.orderDate).getDate())?1:-1)
        // .map((data,index) => {
        //              console.log(
        //                  data.orderDate
        //              )
        // })
    // }
    return(
        <div>
            <div>
                {/* <button onClick = {() => fun(0)}>Day</button>
                <button onClick = {() => fun(1)}>week</button>
                <button onClick = {() => fun(2)}>Month</button> */}
            </div>
            {/* {
                orderData.sort((a,b)=> (new Date(a.orderDate).getDate()<new Date(b.orderDate).getDate())?1:-1)
                .filter((data) => (new Date(data.orderDate).getDate()) === new Date().getDate())
                .map(data => {     
                })
            } */}
        </div>
    )
}
export default OrderDetails