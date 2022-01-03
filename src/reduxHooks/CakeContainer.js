import React from 'react'
import {connect, useDispatch, useSelector} from 'react-redux';
import { buyCake } from './Actions';
function CakeContainer({cakes,buyCake}) {
    return (
        <div>
            num of Cakes --- {cakes}
            <button onClick={buyCake}>buy cake</button>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        cakes : state.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return{
        buyCake : () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
 // using useselector and usedispatch hook 

 export const CakeContainerHook = () =>{
     const usese = useSelector(state => state);
     const dispatch = useDispatch();
     return(
         <div>
     num of cakes --- {usese.numOfCakes}
     <button onClick = {() => dispatch(buyCake())}>decree </button>
         </div>
     )
 }